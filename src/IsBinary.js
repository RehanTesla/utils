import isString from "./IsString.js";
import isNumber from "./IsNumber.js";
const isBinary = str => {
    if (!str)
        return false;
    else if (isNumber(str))
        str = str.toString();
    else if (!isString(str))
        return false;
    for (let char of str) {
        if (char != "0" && char != "1") {
            return false;
        }
    }
    return true;
};
isBinary.fileURL = import.meta.url;
export { isBinary as default, isBinary };
