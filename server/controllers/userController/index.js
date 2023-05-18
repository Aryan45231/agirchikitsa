const User = require("../../models/user");

exports.findAll = async (req, res, next) => {
  try {
    let query = req.query;
    if (query?.workProfile === "worker") {
      query =
        query?.fetchAll === "0"
          ? {
              roles: {
                $in: ["Fitter", "Cleaner", "Electrician"],
              },
              isVisible: true,
              isDeleted: false,
            }
          : {
              roles: { $in: ["Fitter", "Cleaner", "Electrician"] },
              isDeleted: false,
            };
    }
    const data = await User.find(query);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.toggleVisibility = async (req, res, next) => {
  try {
    const id = req.params.id;
    const isUserExist = await User.findById(id);
    if (!isUserExist) {
      const error = new Error(`User  with id ${id} does not exist`);
      error.statusCode = 404;
      throw error;
    }
    const update = { isVisible: !isUserExist.isVisible };
    const data = await User.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.softDelete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const isUserExist = await User.findById(id);
    if (!isUserExist) {
      const error = new Error(`User  with id ${id} does not exist`);
      error.statusCode = 404;
      throw error;
    }
    const update = { isDeleted: true };
    const data = await User.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
