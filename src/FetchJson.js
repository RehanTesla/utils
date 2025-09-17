import * as axiosA from "axios";
import isObject from "./IsObject.js";
const axios = axiosA.default;
const fetchJson = async (url, opts) => {
    if (!isObject(opts))
        opts = {};
    if (typeof url != "string")
        throw new TypeError("[ERR_INVALID_ARG_TYPE]");
    const res = await modul.axios({
        url: url,
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            Accept: "application/json"
        },
        ...opts
    });
    return res.data;
};
fetchJson.fileURL = import.meta.url;
export { fetchJson as default, fetchJson };
