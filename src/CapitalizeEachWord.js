const capitalizeEachWord = text => {
    if (typeof text != "string")
        return text || "";
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
capitalizeEachWord.fileURL = import.meta.url;
export { capitalizeEachWord as default, capitalizeEachWord };