import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
    street: String,
    ward: String,
    district: String,
})

let location = mongoose.model("location", locationSchema);

export default location;