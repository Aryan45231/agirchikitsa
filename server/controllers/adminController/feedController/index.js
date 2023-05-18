const Feed = require("../../../models/feeds/index.js")
const User = require("../../../models/user/index.js")

// Admin controlls on Feed instance
exports.deleteFeed = async (req, res, next) => {
    try {
        const user = req.user
        const { feedId } = req.body
        const user_id = await User.findById(user._id)
        if (!user_id) {
            const err = new Error("User not found!");
            err.statusCode = 401;
            throw err;
        }
        if (!["Admin", "SuperAdmin"].includes(user.roles)) {
            const err = new Error("You don't have permission to delete this feed!");
            err.statusCode = 401;
            throw err;
        }
        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not found!");
            err.statusCode = 401;
            throw err;
        }
        await Feed.findByIdAndDelete(feedId)
        res.status(200).json({
            message: "Feed deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}
exports.updatedFeed = async (req, res, next) => {
    try {
        const user = req.user
        const { feedId, caption } = req.body
        if (!["Admin", "SuperAdmin"].includes(user.roles)) {
            const error = new Error("You don't have permission to update this feed")
            err.statusCode = 400
            throw error
        }
        const feed = Feed.findById(feedId)
        if (!feed) {
            const err = new Error("Feed not found!");
            err.statusCode = 401;
            throw err;
        }
        const updatedFeed = await Feed.findByIdAndUpdate(feedId, { $set: { caption } }, { new: true })
        if (updatedFeed) {
            res.status(200).json({
                message: "Feed updated successfully"
            })
        }
    } catch (error) {
        next(error)
    }

}
// admin Contolls on Jankari Instance
