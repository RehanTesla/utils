const clearLog = () => {
    if (process.stdout.isTTY) {
        if (process.stdout.write)
            process.stdout.write("\x1B[H\x1B[2J\x1B[3J");
        else
            console.log("\x1B[H\x1B[2J\x1B[3J");
    }
    else {
        if (typeof console.clear == "function")
            console.clear();
        else
            console.log("\xBc");
    }
};
clearLog.fileURL = import.meta.url;
export { clearLog as default, clearLog };
