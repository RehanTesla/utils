import isObject from "./IsObject.js";
const parseObject = obj => {
    if (!isObject(obj)) {
        obj = {};
    }
    return obj;
};
export { parseObject as default, parseObject };
