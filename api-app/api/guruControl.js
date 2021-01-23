const models = require("../models/guru");
const tanggal = require("../helper/tanggal");

const readGuru = (req, res, next) => {
  // ? GET ALL
  models
    .findAll({
      order: [["id_guru", "DESC"]],
    })
    .then((data) => {
      res.status(200).send({ message: "data guru", data });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message, data: [] });
    });
};

const createGuru = (req, res, next) => {
  // ? CREATE
  // req.body.updatedAt = tanggal.now1('-');
  // console.log(req.body);
  models
    .create(req.body)
    .then((data) => {
      res.status(200).send({
        message: "guru tersimpan",
        data,
      });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message, data: [] });
    });
};

const updateGuru = (req, res, next) => {
  // ? UPDATE BY NIP
  models
    .update(req.body, {
      where: { nip: req.body.nip },
    })
    .then(() => {
      res.status(200).send({
        message: "guru diubah",
      });
    })
    .catch((err) => {
      res.status(401).send({
        message: err.message,
      });
    });
  // const body = req.body;
  // res.send({ data: 'ini update', body });
};

const deleteGuru = (req, res, next) => {
  // ? HAPUS BY NIP
  models
    .destroy({
      where: { nip: req.params.nip },
    })
    .then(() => {
      res.status(200).send({
        message: "guru dihapus",
      });
    })
    .catch((err) => {
      res.status(401).send({
        message: err.message,
      });
    });
  // const body = req.body;
  // res.send({ data: 'ini dell', body });
};
module.exports = { readGuru, createGuru, updateGuru, deleteGuru };
