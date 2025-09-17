const randomRange = (min, max) => {
    min = parseInt(min);
    max = parseInt(max);
    if (!isNumber(min)) {
        throw new TypeError("[ARG_1] must be a number");
    }
    if (!isNumber(max)) {
        throw new TypeError("[ARG_2] must be a number");
    }
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result < min) result = min;
    else if (result > max) result = max;
    return result;
};

randomRange.fileURL = import.meta.url;

export { randomRange as default, randomRange };
