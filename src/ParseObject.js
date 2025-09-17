import isObject from "./IsObject.js";
const parseObject = obj => {
    if (!isObject(obj)) {
        obj = {};
    }
    return obj;
};
parseObject.fileURL = import.meta.url;
export { parseObject as default, parseObject };
