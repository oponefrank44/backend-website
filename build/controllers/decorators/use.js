"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = use;
require("reflect-metadata");
const MetaDatakey_1 = require("./MetaDatakey");
function use(middleware) {
    return function (target, propertyKey, descriptor) {
        const middlewares = Reflect.getMetadata(MetaDatakey_1.MetaDataKey.middleware, target, propertyKey) || [];
        Reflect.defineMetadata(MetaDatakey_1.MetaDataKey.middleware, [...middlewares, middleware], target, propertyKey);
    };
}
