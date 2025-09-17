const parseArray = arr => {
    if (!Array.isArray(arr)) {
        arr = [];
    }
    return arr;
};
parseArray.fileURL = import.meta.url;
export { parseArray as default, parseArray };
