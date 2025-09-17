const getDriveId = url => {
    if (typeof url == "string") {
        return url.includes("uc?export=download&id=")
            ? url.split("uc?export=download&id=")[1]?.split("/")[0] || null
            : url.match(/\/d\/([a-zA-Z0-9_-]+)/)[1] || null;
    }
    throw new TypeError("[ARG] must be a string");
};
getDriveId.fileURL = import.meta.url;
export { getDriveId as default, getDriveId };
