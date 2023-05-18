const CheckList = require("../../models/checkList");

exports.create = async (req, res, next) => {
  try {
    const document = req.body;
    const data = await CheckList.create(document);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.find = async (req, res, next) => {
  try {
    const query = req.query;
    const data = await CheckList.find(query);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
