const moment = require("moment-timezone"),
  DailyAssignedTask = require("../../models/dailyAssignedTask"),
  IST = "Asia/Kolkata",
  currentDate = moment.tz(IST).format("YYYY-MM-DD"),
  startOfDay = moment.tz(currentDate, IST).startOf("day").toDate(),
  endOfDay = moment.tz(currentDate, IST).endOf("day").toDate();

exports.create = async (req, res, next) => {
  try {
    const document = req.body;
    const data = await DailyAssignedTask.create(document);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
exports.findAll = async (req, res, next) => {
  try {
    const query = {
      createdAt: {
        $gte: startOfDay,
        $lt: endOfDay
      }
    };
    const data = await DailyAssignedTask.find(query).populate(
      "assignedWorkers"
    ).sort({createdAt: -1});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
exports.findAssignedTaskByWorkerId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = {
      assignedWorkers: {
        $elemMatch: { $eq: id }
      },
      createdAt: {
        $gte: startOfDay,
        $lt: endOfDay
      }
    };
    const data = await DailyAssignedTask.findOne(query);
    if (!data) {
      res.status(200).json({
        success: false,
        taskAssigned: false,
      });
    } else {
      res.status(200).json({
        success: true,
        taskAssigned: true,
        data,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateAssignedTaskStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const isAssignedTaskExist = await DailyAssignedTask.findById(id);
    if (!isAssignedTaskExist) { 
      const error = new Error(`Task with id : ${id} does not exist`);
      error.statusCode = 403;
      throw error;
    }
    const data = await DailyAssignedTask.findByIdAndUpdate(id, body,{new:true});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}