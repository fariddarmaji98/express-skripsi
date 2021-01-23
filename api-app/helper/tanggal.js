const date = new Date();
const thn = date.getFullYear(); // ? tahun
const bln = date.getMonth(); // ? bulan
const tgl = date.getDate(); // ? tanggal
const ml = date.getMilliseconds(); // ? millidetik
const dtk = date.getSeconds(); // ? detik
const mnt = date.getMinutes(); // ? menit
const jam = date.getHours(); // ? jam
const hri = date.getDay(); // ? hari dalam bentuk angka 0-7 jadi harus didefinisi nama harinya

const now1 = (pemisah) => { // ? thn bln tgl
    let buln = bln + 1;
    return thn.toString() + pemisah + buln.toString() + pemisah + tgl.toString();
}

const now2 = (pemisah) => { // ? tgl bln thn
    buln = bln + 1;
    return tgl.toString() + pemisah + buln.toString() + pemisah + thn.toString();
}

const hari = (bahasa) => { // ? penamaan hari
    if (bahasa == 'indonesia') {
        switch (hri) {
            case 0:
                return "Minggu";
                break;
            case 1:
                return "Senin";
                break;
            case 2:
                return "Selasa";
                break;
            case 3:
                return "Rabu";
                break;
            case 4:
                return "Kamis";
                break;
            case 5:
                return "Jum'at";
                break;
            case 6:
                return "Sabtu";
                break;
            default:
                return "?";
                break;
        }
    }
    if (bahasa == 'english') {
        switch (hri) {
            case 0:
                return "Sunday";
                break;
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
            default:
                return "?";
                break;
        }
    }
}

const bulan = (bahasa) => { // ? penamaan hari
    if (bahasa == 'indonesia') {
        switch (bln) {
            case 0:
                return "Januari";
                break;
            case 1:
                return "Februari";
                break;
            case 2:
                return "Maret";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "Mei";
                break;
            case 5:
                return "Juni";
                break;
            case 6:
                return "Juli";
                break;
            case 7:
                return "Agustus";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "Oktober";
                break;
            case 10:
                return "Nopember";
                break;
            case 11:
                return "Desember";
                break;
            default:
                return "?";
                break;
        }
    }
    if (bahasa == 'indonesia') {
        switch (bln) {
            case 0:
                return "January";
                break;
            case 1:
                return "February";
                break;
            case 2:
                return "March";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "June";
                break;
            case 6:
                return "July";
                break;
            case 7:
                return "August";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "October";
                break;
            case 10:
                return "November";
                break;
            case 11:
                return "December";
                break;
            default:
                return "?";
                break;
        }
    }
}

module.exports = { hari, now1, now2, bulan };