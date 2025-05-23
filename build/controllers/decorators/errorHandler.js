"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apperror_1 = __importDefault(require("./apperror"));
const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    if (err instanceof apperror_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};
exports.default = errorHandler;
