"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enum_1 = require("./enum");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: enum_1.ModelStatus.NOTSTARTED,
    },
    githubLink: {
        type: String,
    },
    websiteLink: {
        type: String,
    },
}, { timestamps: true });
const ProjectModel = (0, mongoose_1.model)("Project", projectSchema);
exports.default = ProjectModel;
