import isObject from "./IsObject.js";
import isMap from "./IsMap.js";
import isNumber from "./IsNumber.js";
import isSet from "./IsSet.js";
import randomNumber from "./RandomNumber.js";
const pickRandom = item => {
    let result;
    if (isMap(item)) {
        result = pickRandom(Array.from(item.values()));
    }
    else if (isObject(item)) {
        result = pickRandom(Object.values(item));
    }
    else if (typeof item === "string" || Array.isArray(item)) {
        result = item[randomNumber(item.length - 1)];
    }
    else if (isNumber(item)) {
        result = parseInt(pickRandom(item.toString()));
    }
    else if (isSet(item)) {
        result = pickRandom(Array.from(item));
    }
    else {
        throw new TypeError("[ERR_INVALID_ARG_TYPE]");
    }
    return result;
};
pickRandom.fileURL = import.meta.url;
export { pickRandom as default, pickRandom };
