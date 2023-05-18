const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
         
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed

