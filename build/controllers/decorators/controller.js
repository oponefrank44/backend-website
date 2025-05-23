"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetaDatakey_1 = require("./MetaDatakey");
function bodyValidator(keys) {
    return function (req, res, next) {
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}`);
                return;
            }
        }
        next();
    };
}
function Controller(routePreFix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        Object.getOwnPropertyNames(target.prototype).forEach((Key) => {
            const RouteHandler = target.prototype[Key];
            const path = Reflect.getMetadata(MetaDatakey_1.MetaDataKey.path, target.prototype, Key);
            const method = Reflect.getMetadata(MetaDatakey_1.MetaDataKey.method, target.prototype, Key);
            const middlewares = Reflect.getMetadata(MetaDatakey_1.MetaDataKey.middleware, target.prototype, Key) ||
                [];
            const requiredBodyProps = Reflect.getMetadata(MetaDatakey_1.MetaDataKey.validator, target.prototype, Key) || [];
            const validator = bodyValidator(requiredBodyProps);
            if (path) {
                router[method](`${routePreFix}${path}`, ...middlewares, validator, RouteHandler);
            }
        });
    };
}
