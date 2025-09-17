import getIntersection from "./GetIntersection.js";
const hasIntersection = (arr1, arr2) => !!getIntersection(arr1, arr2).length;
hasIntersection.fileURL = import.meta.url;
export { hasIntersection as default, hasIntersection };
