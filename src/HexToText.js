const hexToText = hex => {
    if (typeof hex != "string") {
        throw new TypeError("[ARG] must be a string");
    }
    return Array.from(hex.matchAll(/.{2}/g))
        .map(byte => String.fromCharCode(parseInt(byte[0], 16)))
        .join("");
};
hexToText.fileURL = import.meta.url;
export { hexToText as default, hexToText };
