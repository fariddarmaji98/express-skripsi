const {
  joinLaporanNilai,
  joinLaporanPresensi,
  joinNilaiRank1,
} = require("../models/queryJoin");

const laporanNilai = (req, res, next) => {
  // ? GET ALL
  joinLaporanNilai()
    .then((data) => {
      res.status(200).send({ message: "data nilai", data });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message, data: [] });
    });
};

const laporanPresens = (req, res, next) => {
  // ? GET ALL
  joinLaporanPresensi()
    .then((data) => {
      res.status(200).send({ message: "data presensi", data });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message, data: [] });
    });
};

const nilaiRank1 = (req, res, next) => {
  // ? GET rank 1 by kelas and tahun_ajaran
  joinNilaiRank1()
    .then((data) => {
      res.status(200).send({ message: "data rank", data });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message, data: [] });
    });
};

module.exports = { laporanNilai, laporanPresens, nilaiRank1 };
