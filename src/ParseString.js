import isString from "./IsString.js";
const parseString = arg => {
  if (!isString(arg) {
    arg = "";
  };
  return arg;
};
parseString.fileURL = import.meta.url;
export { parseString as default, parseString };
