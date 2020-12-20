import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    prices: {

        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RenterModel",
    }],
    likeCount: {
        type: Number,
        default: 0,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HostModel",
    }
}, { timestamps: true });

let PostModel = mongoose.model("PostModel", postModel);

export default PostModel;

