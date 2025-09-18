import isObject from "./IsObject.js";
import isBoolean from "./IsBoolean.js";
const toPlainObject = (obj, andArray, arrMap) => {
    if (isObject(obj)) return obj;
    if (!isBoolean(andArray)) {
        andArray = true;
    }
    if (Array.isArray(arrMap)) {
        andArray = true;
    }
    let plain;
    if (Array.isArray(obj)) {
        if (andArray) {
            plain = obj.map(toPlainObjectInPlace);
        }
    } else {
        plain = {};
        for (const key of Object.keys(obj)) {
            plain[key] = toPlainObjectInPlace(obj[key]);
        }
    }
    for (const key of Object.keys(obj)) {
        delete obj[key];
    }
    Object.assign(obj, plain);
    Object.setPrototypeOf(obj, Object.prototype);
    return obj;
};
toPlainObject.fileURL = import.meta.url;
export { toPlainObject as default, toPlainObject };
