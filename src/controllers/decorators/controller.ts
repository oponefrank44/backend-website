import { NextFunction, Request, Response, RequestHandler } from "express";
import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Method";
import { MetaDataKey } from "./MetaDatakey";

function bodyValidator(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
  
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }
    next();
  };
}

export function Controller(routePreFix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    Object.getOwnPropertyNames(target.prototype).forEach((Key) => {
      const RouteHandler = target.prototype[Key];
      const path = Reflect.getMetadata(MetaDataKey.path, target.prototype, Key);
      const method: Methods = Reflect.getMetadata(
        MetaDataKey.method,
        target.prototype,
        Key
      );
      const middlewares =
        Reflect.getMetadata(MetaDataKey.middleware, target.prototype, Key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetaDataKey.validator, target.prototype, Key) || [];
      const validator = bodyValidator(requiredBodyProps);
      if (path) {
        router[method](
          `${routePreFix}${path}`,
          ...middlewares,
          validator,
          RouteHandler
        );
      }
    });
  };
}
