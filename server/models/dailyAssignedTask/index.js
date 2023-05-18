const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dailyAssignedTaskSchema = new Schema(
    {
      groupName: {
        type: String,
        require: true,
      },
      vehicleID: {
        type: String,
        require: true,
      },
      assignedWorkers: {
        type: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      },
      status: {
        type: String,
        require: false,
        enum: ["Assigned","Awaiting approval", "Done"],
      },
      descripation: {
        type: String,
        require: true
      }
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("DailyAssignedTask", dailyAssignedTaskSchema);
