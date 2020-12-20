import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    selectedFile: "String",
    createAt: {
        type: Date,
        default: new Date(),
    }
});

let PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;