import mongoose from "mongoose";

const hostModel = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    }
}, { timestamps: true });

let HostModel = mongoose.model("HostModel", hostModel);

export default HostModel;