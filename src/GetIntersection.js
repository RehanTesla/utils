const getIntersection = (arr1, arr2) => {
    if (!Array.isArray(arr1)) {
        throw new TypeError("[ARG_1] must be a array");
    }
    if (!Array.isArray(arr2)) {
        throw new TypeError("[ARG_2] must be a array");
    }
    let set2 = new Set(arr2);
    return arr1.filter(val => set2.has(val));
};
getIntersection.fileURL = import.meta.url;
export { getIntersection as default, getIntersection };
