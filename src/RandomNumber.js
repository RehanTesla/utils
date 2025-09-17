import isNumber from "./IsNumber.js";
const randomNumber = limit => {
    limit = parseInt(limit);
    if (!isNumber(limit)) {
        throw new TypeError("[ARG] must be a number");
    }
    let result = Math.floor(Math.random() * (limit + 1));
    if (result < 0)
        result = 0;
    else if (result > limit)
        result = limit;
    return result;
};
randomNumber.fileURL = import.meta.url;
export { randomNumber as default, randomNumber };
