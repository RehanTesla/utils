const textToHex = text => {
    if (typeof text != "string") {
        throw new TypeError("[ARG] must be a string");
    }
    return Array.from(text)
        .map(char => char.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("");
};
textToHex.fileURL = import.meta.url;
export { textToHex as default, textToHex };
