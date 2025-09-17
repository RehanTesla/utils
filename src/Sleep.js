import isNumber from "./IsNumber.js";

const sleep = ms => {
    ms = parseInt(ms);
    return new Promise(resolve => {
        if (isNumber(ms)) {
            setTimeout(resolve, ms);
        } else {
            resolve();
        }
    });
};
sleep.fileURL = import.meta.url;
export { sleep as default, sleep };
