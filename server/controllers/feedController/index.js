const User = require("../../models/user")
const Feed = require("../../models/feeds")
const Comment = require("../../models/feeds/comment")
exports.create = async (req, res,next) => {
   try{
    const user = req.user
    const {text , imgurl} = req.body
    const feed = new Feed({  text, imgurl, user})
    await feed.save()
    res.status(300).json({
        message: 'Feed created successfully'
    })
   }catch(error){
    next(error)
   }
}

// API route to like a feed
exports.toggleLike = async (req, res) => {
    try {
        const feedId = req.params.feedId ;
        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not fount !");
            err.statusCode = 401;
            throw err;
        }
        const userIndex = feed.likes.indexOf(user._id);
        if (userIndex !== -1) {
            feed.likes.splice(userIndex, 1);
        } else {
            feed.likes.push(user._id);
        }
        const updatedFeed = await feed.save();

        res.status(200).json(updatedFeed);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}
// API route for Comment on Feed
exports.comment = async (req, res, next) => {
    try {
        const feedID = req.params.feedID;
        const { comment } = req.body
        const user = req.user
        if (!user) {
            const err = new Error("User not found !");
            err.statusCode = 401;
            throw err;
        }

        const feed = await Feed.findById(feedId);
        if (!feed) {
            const err = new Error("Feed not fount !");
            err.statusCode = 401;
            throw err;
        }

        const newComment = new Comment({
            comment,
            user: user._id,
            feed: feed._id
        });

        const savedComment = await newComment.save();

        feed.comments.push(savedComment._id);
        const updatedFeed = await feed.save();
        res.status(200).json({ savedComment, updatedFeed });
    } catch (error) {
        next(error)
    }
}

