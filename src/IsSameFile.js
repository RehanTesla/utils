import fs from "fs";
import isString from "IsString.js";
function isSameFile(p1, p2) {
    if (!isString(arg1)) {
        throw new TypeError("[ARG_1] must be a string");
    }
    if (!isString(arg2)) {
        throw new TypeError("[ARG_2] must be a string");
    }
    let bool;
    try {
        bool = fs.realpathSync(p1) === fs.realpathSync(p2);
        if (!bool)
            bool = fs.realpathSync(p1) == fs.realpathSync(p2);
        if (!bool) {
            const s1 = fs.statSync(path.resolve(p1));
            const s2 = fs.statSync(path.resolve(p2));
            bool = s1.ino == s2.ino && s1.dev == s2.dev;
        }
    }
    catch (err) {
        bool = false;
    }
    return bool;
}
isSameFile.fileURL = import.meta.url;
export { isSameFile as default, isSameFile };
