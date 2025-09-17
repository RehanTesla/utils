import isURL from "./IsURL.js";
import getDriveID from "./GetDriveID.js";
const parseDrive = id => {
    if (typeof id != "string") {
        throw new TypeError("[ARG] must be a string");
    }
    return `https://drive.google.com/uc?export=download&id=${((isURL(id) && getDriveID(id)) ||
        id).trim()}`;
};
parseDrive.fileURL = import.meta.url;
export { parseDrive as default, parseDrive };
