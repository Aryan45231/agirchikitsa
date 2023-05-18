const TaskHistory = require("../../models/taskHistory"),
  DailyAssignedTask = require("../../models/dailyAssignedTask"),
  User = require("../../models/user");

exports.createTaskHistory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const isAssignedTaskExist = await DailyAssignedTask.findById(id);
    if (!isAssignedTaskExist) {
      const error = new Error(`Task with id : ${id} does not exist`);
      error.statusCode = 403;
      throw error;
    }
    const {
      groupName,
      vehicleID,
      assignedWorkers,
      descripation,
      createdAt,
      updatedAt,
    } = isAssignedTaskExist;
    const document = {
      groupName,
      vehicleID,
      assignedWorkers,
      descripation,
      createdAt,
      updatedAt,
      status: "Done",
    };
    const data = await TaskHistory.create(document);
    assignedWorkers.forEach(async (workerId) => {
      await User.findByIdAndUpdate(workerId, { isVisible: true });
    });
    await DailyAssignedTask.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
exports.findTaskHistoryOfWorker = async (req, res, next) => {
  try {
    const id = req.user._id;
    const query = {
      assignedWorkers: {
        $elemMatch: { $eq: id },
      },
    };
    const data = await TaskHistory.find(query).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.findTaskHistory = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  try {
    const data = await TaskHistory.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("assignedWorkers");
    const count = await TaskHistory.countDocuments();
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      history: data,
      page,
      totalPages,
      count,
    });
  } catch (error) {
    next(error);
  }
};
