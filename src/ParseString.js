const parseString = arg => (arg ? arg.toString() : "");
parseString.fileURL = import.meta.url;
export { parseString as default, parseString };
