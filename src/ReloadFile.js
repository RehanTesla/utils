import * as fs from "fs";
const reloadFile = (__filename, kode = false) => {
    fs.watchFile(__filename, () => {
        fs.unwatchFile(__filename);
        import(`${__filename}?${Date.now()}`).then(async (module) => {
            console.log("    Reload In \n" + __filename);
            if (kode) {
                await eval(`(async () => { \n${kode} \n})()`).catch(e => console.log("\n\b\n\t\n", e));
            }
        });
    });
};
reloadFile.fileURL = import.meta.url;
export { reloadFile as default, reloadFile };
