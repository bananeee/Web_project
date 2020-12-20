import mongoose from "mongoose";

const renterModel = mongoose.Schema(
    {
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
        },
    },
    { timestamps: true }
);

let RenterModel = mongoose.model("RenterModel", renterModel);

export default RenterModel;
