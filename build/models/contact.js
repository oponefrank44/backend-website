"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Contact = new mongoose_1.Schema({
    names: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const ContactModel = (0, mongoose_1.model)("Contact", Contact);
exports.default = ContactModel;
