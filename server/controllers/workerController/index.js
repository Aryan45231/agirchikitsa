const Worker = require("../../models/workers");

exports.create = async(req, res, next) => { 
    try {
        const data = await Worker.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

exports.findAll = async(req, res, next) => { 
    try {
        const data = await Worker.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

exports.findOne = async(req, res, next) => { 
    try {
        const _id = req.params.id;
        const data = await Worker.findOne({_id});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}
exports.updateOne = async(req, res, next) => { 
    try {
        const _id = req.params.id;
        const update = req.body;
        const data = await Worker.findOneAndUpdate({_id},update);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

exports.softDelete = async(req, res, next) => { 
    try {
        const _id = req.params.id;
        const update = req.body;
        const data = await Worker.findOneAndUpdate({_id},{isVisible:false});
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}