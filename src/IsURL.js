import isString from "./IsString.js";
const isURL = str => {
    if (IsString(str)) {
        if (!str.startsWith("http://") || !str.startsWith("https://"))
            str = "http://" + str.trim();
    }
    else
        return false;
    try {
        new URL(str);
        return true;
    }
    catch (_) {
        return false;
    }
};
isURL.fileURL = import.meta.url;
export { isURL as default, isURL };
