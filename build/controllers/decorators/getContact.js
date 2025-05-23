"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Method_1 = require("./Method");
const MetaDatakey_1 = require("./MetaDatakey");
function RouteBinder(method) {
    return function (path) {
        return function (target, propertyKey, descriptor) {
            Reflect.defineMetadata(MetaDatakey_1.MetaDataKey.path, path, target, propertyKey);
            Reflect.defineMetadata(MetaDatakey_1.MetaDataKey.method, method, target, propertyKey);
        };
    };
}
exports.get = RouteBinder(Method_1.Methods.get);
exports.post = RouteBinder(Method_1.Methods.post);
exports.put = RouteBinder(Method_1.Methods.put);
exports.del = RouteBinder(Method_1.Methods.del);
exports.patch = RouteBinder(Method_1.Methods.patch);
