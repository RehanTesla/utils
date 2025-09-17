import isString from "./IsString.js";
import isNumber from "./IsNumber.js";
import sleep from "./Sleep.js";
const logCountdown = async (jumlah = 0, delay = 0) => {
    jumlah = parseNumber(jumlah);
    delay = parseNumber(delay);
    for (let i = jumlah; i > 0; i--) {
        console.log(i);
        if (delay > 0 && i > 1)
            await sleep(delay);
    }
};
const parseNumber = arg => isNumber(arg)
    ? arg
    : isString(arg)
        ? (isNumber(parseInt(arg)) && parseInt(arg)) || 0
        : 0;
logCountdown.fileURL = import.meta.url;
parseNumber.fileURL = import.meta.url;
export { logCountdown as default, logCountdown, parseNumber };
