const renameKey = async (obj, from, to) => {
    if (obj.hasOwnProperty(from)) {
        obj[to] = obj[from];
        delete obj[from];
    }
};
renameKey.fileURL = import.meta.url;
export { renameKey as default, renameKey };
