const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  checkListSchema = new Schema(
    {
      category: {
        type: String,
        require: true,
      },
      descripation: {
        type: String,
        require: false,
      },
      isHaveSubCategory: {
        type: Boolean,
        require: true,
      },
      subCategory: {
        type: [
          {
            title: String,
            isChecked: {
              type: Boolean,
              require: false,
              default: false,
            },
          },
        ],
        require: false,
      },
      isChecked: {
        type: Boolean,
        require: false,
        default: false,
      },
      maintenanceDuration: {
        type: String,
        require: true,
        default: "50/100 Hr.",
      },
      vehicleId: {
        type: String,
        require: false,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("CheckList", checkListSchema);
