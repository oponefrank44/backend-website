
import "reflect-metadata";
import { MetaDataKey } from "./MetaDatakey";

export function BodyValidator(...keys: string[]) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                Reflect.defineMetadata(MetaDataKey.validator, keys, target, propertyKey);
        }
}

