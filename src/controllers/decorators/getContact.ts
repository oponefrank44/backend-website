import "reflect-metadata";
import { Methods } from "./Method";
import { MetaDataKey } from "./MetaDatakey";
import { RequestHandler } from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function RouteBinder(method: string) {
  return function (path: string) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: RouteHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetaDataKey.path, path, target, propertyKey);
      Reflect.defineMetadata(MetaDataKey.method, method, target, propertyKey);
    };
  };
}

export const get = RouteBinder(Methods.get);
export const post = RouteBinder(Methods.post);
export const put = RouteBinder(Methods.put);
export const del = RouteBinder(Methods.del);
export const patch = RouteBinder(Methods.patch);
