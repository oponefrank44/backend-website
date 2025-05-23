import "reflect-metadata";
import { MetaDataKey } from "./MetaDatakey";
import { RequestHandler } from "express";

 
export function use(middleware:RequestHandler) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(MetaDataKey.middleware, target, propertyKey) || [];
       
        Reflect.defineMetadata(MetaDataKey.middleware, [...middlewares,middleware], target, propertyKey);
    }
}
