import isNumber from "./IsNumber.js";
const parseNumber = num => {
    try {
        num = parseInt(num);
        if (isNaN(num)) {
            return 0;
        }
    } catch (e) {
        return 0;
    }
    return num;
};
parseNumber.fileURL = import.meta.url;
export { parseNumber as default, parseNumber };
