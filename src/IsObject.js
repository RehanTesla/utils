const isObject = arg => arg !== null &&
    typeof arg == "object" &&
    !(arg instanceof Array) &&
    !(arg instanceof Map) &&
    !Array.isArray(arg);
isObject.fileURL = import.meta.url;
export { isObject as default, isObject };
