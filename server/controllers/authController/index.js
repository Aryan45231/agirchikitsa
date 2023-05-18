const jwt = require("jwt-simple"),
  User = require("../../models/user"),
  config = require("../../config");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, isDeleted: false }).select(
      "+password"
    );
    if (!user) {
      const err = new Error("User not found with given email!");
      err.statusCode = 401;
      throw err;
    }
    if (!user?.password) {
      const err = new Error(
        "No user found with given  credentials , create your account and try again!"
      );
      err.statusCode = 401;
      throw err;
    }
    const isValidPassword = await user.validatePassword(
      password,
      user.password
    );
    if (!isValidPassword) {
      const err = new Error("Password is invalid !");
      err.statusCode = 401;
      throw err;
    }
    const token = jwt.encode({ id: user._id }, config.jwtSecret);
    const userInfo = await User.findById(user._id);
    res.status(200).json({
      user: userInfo,
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { name, roles, companyId , email , password} = req.body;
    if (["SuperAdmin", "Admin"].includes(roles)) {
      const err = new Error(
        `User with role as ${roles} is not allowed to create, please contact the administrator!`
      );
      err.statusCode = 403;
      throw err;
    }
    const existingUser = await User.findOne({ companyId });
    if (existingUser) {
      const err = new Error("Company Id already in use!");
      err.statusCode = 403;
      throw err;
    }
    let newUser = new User();
    newUser.name = name;
    newUser.roles = roles;
    newUser.companyId = companyId;
    newUser.email = email;
    newUser.password = await newUser.encryptPassword(password)
    newUser = await newUser.save();
    const token = jwt.encode({ id: newUser._id }, config.jwtSecret);
    res.status(200).json({
      newUser,
      token,
    });
  } catch (err) {
    next(err);
  }
};
exports.updateProfile = async (req, res, next) => {
  try {
    let update = req.body;
    const companyId = req.params.id;
    const existingUser = await User.findOne({ companyId, isDeleted: false });
    if (!existingUser) {
      const err = new Error("No such user found in the database!");
      err.statusCode = 403;
      throw err;
    }
    if (update?.updateType) {
      if (existingUser?.isProfileCompleted) {
        const err = new Error(
          "User already exists. Please try for logging in!"
        );
        err.statusCode = 403;
        throw err;
      }
      update = { ...update, isProfileCompleted: true };
    }
    if (update?.password) {
      const encryptPassword = await existingUser.encryptPassword(
        update.password
      );
      update = {
        ...update,
        password: encryptPassword,
      };
    }
    let updatedUser = await User.findByIdAndUpdate(existingUser._id, update, {
      new: true,
    });
    const token = jwt.encode({ id: updatedUser._id }, config.jwtSecret);
    res.status(200).json({
      user: updatedUser,
      token,
    });
  } catch (err) {
    next(err);
  }
};
exports.findByEmployeeId = async (req, res, next) => {
  try {
    const { employeeid: companyId, roles } = req.params;
    const existingUser = await User.findOne({
      companyId,
      roles,
      isDeleted: false,
    });
    if (!existingUser) {
      const err = new Error("No such user found in the database!");
      err.statusCode = 403;
      throw err;
    }
    res.status(200).json(existingUser);
  } catch (err) {
    next(err);
  }
};
exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
