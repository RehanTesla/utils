import isNumber from "./IsNumber.js";
import isString from "./IsString.js";
const flattenArray = (arr, deepness = 1) => {
    if (!isString(deepness) && !isNumber(deepness))
        deepness = 1;
    else if (isString(deepness) && deepness.toLowerCase() != "all")
        deepness = 1;
    if (!Array.isArray(arr))
        throw new TypeError("[ERR_INVALID_ARG_TYPE]");
    let result = [];
    for (let item of arr) {
        if ((isString(deepness) && deepness.toLowerCase() == "all"
            ? true
            : deep > 0) &&
            Array.isArray(item)) {
            result = result.concat(flattenArray(item, isString(deepness) && deepness.toLowerCase() == "all"
                ? "all"
                : deepness - 1));
        }
        else {
            result.push(item);
        }
    }
    return result;
};
flattenArray.fileURL = import.meta.url;
export { flattenArray as default, flattenArray };
