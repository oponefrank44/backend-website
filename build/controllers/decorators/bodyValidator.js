"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyValidator = BodyValidator;
require("reflect-metadata");
const MetaDatakey_1 = require("./MetaDatakey");
function BodyValidator(...keys) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata(MetaDatakey_1.MetaDataKey.validator, keys, target, propertyKey);
    };
}
