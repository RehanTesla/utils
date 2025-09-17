import moment from "moment-timezone";

/**
 * Format waktu lengkap dengan ucapan sesuai jam, menggunakan moment-timezone
 *
 * @param {number | Date | string} [time=Date.now()] - Waktu yang akan diformat (timestamp, Date, atau string)
 * @param {string} [tz="Asia/Jakarta"] - Timezone, default Asia/Jakarta
 * @returns {{
 *   tahun: string,
 *   bulan: { index: string, name: string },
 *   tanggal: string,
 *   hari: string,
 *   jam: string,
 *   menit: string,
 *   detik: string,
 *   miliDetik: string,
 *   id: string,
 *   ucapanWaktu: string
 * }}
 */
const times = (time = Date.now(), tz = "Asia/Jakarta") => {
    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jum'at",
        "Sabtu"
    ];
    const bulans = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const date = moment(time).tz(tz);

    let now = {};
    now.bulan = {};
    now.tahun = date.year().toString();
    now.bulan.index = (date.month() + 1).toString().padStart(2, "0");
    now.bulan.name = bulans[date.month()];
    now.tanggal = date.date().toString().padStart(2, "0");
    now.hari = hari[date.day()];
    now.jam = date.hour().toString().padStart(2, "0");
    now.menit = date.minute().toString().padStart(2, "0");
    now.detik = date.second().toString().padStart(2, "0");
    now.miliDetik = date.millisecond().toString().padStart(3, "0");
    now.id = `${now.tahun}${now.bulan.index}${now.tanggal}${now.jam}${now.menit}${now.detik}${now.miliDetik}`;

    const jam = date.hour();
    if ((jam >= 23 && jam < 24) || (jam >= 0 && jam <= 2)) {
        now.ucapanWaktu = "Selamat tengah malam 🌃";
    } else if (jam >= 2 && jam < 5) {
        now.ucapanWaktu = "Selamat subuh 🌆";
    } else if (jam >= 5 && jam < 9) {
        now.ucapanWaktu = "Selamat pagi 🌄";
    } else if (jam >= 9 && jam < 14) {
        now.ucapanWaktu = "Selamat siang 🌤";
    } else if (jam >= 14 && jam < 17) {
        now.ucapanWaktu = "Selamat sore 🌇";
    } else if (jam >= 17 && jam < 20) {
        now.ucapanWaktu = "Selamat petang 🌆";
    } else if (jam >= 20 && jam < 23) {
        now.ucapanWaktu = "Selamat malam 🏙";
    } else {
        now.ucapanWaktu = "Hai ";
    }

    return now;
};

times.fileURL = import.meta.url;
export { times as default, times };