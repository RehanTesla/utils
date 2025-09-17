const isNumber = int => typeof int == "number" && !isNaN(int);
isNumber.fileURL = import.meta.url;
export { isNumber as default, isNumber };
