const mongoose = require("mongoose");
const { isEmail } = require("validator");

const ClientSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Client Name is required."],
            trim: true,
            unique: [true, "Client name already excits in Database."],
            lowercase: true
        },
        description: {
            type: String,
            required: false,
            trim: true,
            lowercase: true
        },
        mobile:{
            type: Number,
            required: [true, "mobile number is required"],
            minlength: [3, "Password should be minimum 3 letters"]
        },
        email:{
            type: String,
            required: [true, "Email is required"],
            trim: true,
            unique: true,
            lowercase: true,
            validate: [isEmail, "Please enter a valid email id"]
        },
        projects: {
            type: Array,
            required: false
        }
    }
)

module.exports = mongoose.model("Client", ClientSchema);