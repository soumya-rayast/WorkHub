const mongoose = require('mongoose');

const UserSchema = new mongoose(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'Invalid email format'],
        },
        password: {
            type: String,
            required: true,
        },
        role: {  
            type: String,
            enum: ['admin', 'member'],
            default: 'member'
        },
        profileImageUrl: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);