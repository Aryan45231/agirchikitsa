const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  userSchema = new Schema(
    {
      name: {
        type: String,   
        require: true,
      },
      companyId: {
        type: String,
        require: false,
      },
      email: {
        type: String,
        require: false,
      },
      roles: {
        type: String,
        enum: [
          "SuperAdmin",
          "Admin",
          "User"
        ],
        require: true,
      },
      password: {
        type: String,
        require: false,
        select: false,
      },
      phoneNumber: {
        type: Number,
        require: false,
      },
      age: {
        type: Number,
        require: false,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        require: false,
      },
      isVisible: {
        type: Boolean,
        require: false,
        default: true,
      },
      isProfileCompleted: {
        type: Boolean,
        require: false,
        default: false,
      },
      profileImage: {
        type: String,
        require: false,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxVD1Drbdtn73Na022-0o8BaS8D_d5Nwah5efhhZq0_U0n0p7-kovnA&s=0"
      },
      isDeleted: {
        type: Boolean,
        require: false,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
userSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
userSchema.methods.validatePassword = async function (
  candidatePassword,
  hashPassword
) {
  const result = await bcrypt.compare(candidatePassword, hashPassword);
  return result;
};
module.exports = mongoose.model("User", userSchema);
