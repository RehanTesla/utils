import isNumber from "./IsNumber.js";
import isString from "./IsString.js";
const formatBytes = bytes => {
    if (isString(bytes))
        bytes = parseInt(bytes);
    if (!isNumber(bytes) || bytes === 0)
        return "0 Bytes";
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
};
formatBytes.fileURL = import.meta.url;
export { formatBytes as default, formatBytes };