const removeLeadingZeros = str => {
    if (typeof str == "string") {
        return str?.toString().replace(/^0+/, "") || null;
    }
    throw new TypeError("[ARG] must be a string");
};
removeLeadingZeros.fileURL = import.meta.url;
export { removeLeadingZeros as default, removeLeadingZeros };
