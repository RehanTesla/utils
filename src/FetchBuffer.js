import * as axiosA from "axios";
const axios = axiosA.default;
const fetchBuffer = async (url) => {
    if (typeof url != "string")
        throw new TypeError("[ERR_INVALID_ARG_TYPE]");
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(res.data);
};
fetchBuffer.fileURL = import.meta.url;
export { fetchBuffer as default, fetchBuffer };
