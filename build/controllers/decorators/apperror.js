"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
        // Maintain proper stack trace (only in V8 engines like Node.js)
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
exports.default = AppError;
