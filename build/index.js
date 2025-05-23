"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/routeController");
require("dotenv/config");
const errorHandler_1 = __importDefault(require("./controllers/decorators/errorHandler"));
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
const PORT = 3000;
// Middleware to handle CORS errors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(AppRouter_1.AppRouter.getInstance());
app.use(errorHandler_1.default);
const mongoUri = process.env.MONGOBD_URI;
if (!mongoUri) {
    throw new Error("MONGOBD_URI environment variable is not defined.");
}
// Log the MongoDB URI
mongoose_1.default
    .connect(mongoUri)
    .then((result) => {
    app.listen(PORT, () => {
        console.log(`love is running on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
