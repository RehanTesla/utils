import removeLeadingZeros from "./RemoveLeadingZeros.js";
import isNumber from "./IsNumber.js";
const getDayName = (day, month, year) => {
    day = parseInt(removeLeadingZeros(day.toString()).trim());
    month = parseInt(removeLeadingZeros(month.toString()).trim());
    year = parseInt(removeLeadingZeros(year.toString()).trim());
    if (isNumber(day) || isNumber(month) || isNumber(year))
        throw new TypeError("[ERR_INVALID_ARG_TYPE]");
    try {
        const date = new Date(year, month - 1, day);
        const days = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu"
        ];
        return days[date.getDay()];
    }
    catch (err) {
        if (month == 1 || month == 2) {
            month += 12;
            year--;
        }
        const q = day;
        const m = month;
        const K = year % 100;
        const J = Math.floor(year / 100);
        const h = (q +
            Math.floor((13 * (m + 1)) / 5) +
            K +
            Math.floor(K / 4) +
            Math.floor(J / 4) -
            2 * J) %
            7;
        const days = [
            "Sabtu",
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat"
        ];
        return days[h];
    }
};
getDayName.fileURL = import.meta.url;
export { getDayName as default, getDayName };
