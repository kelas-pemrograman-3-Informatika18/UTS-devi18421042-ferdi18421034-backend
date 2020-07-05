const damriModel = require('../model/Damri')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')
const { request } = require('express')

exports.insertDamri = (data) =>
  new Promise((resolve, reject) => {
    damriModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input Data Damri')))
    .catch(() => reject(requestResponse.serverError))
  })

  exports.getAllDamri = () =>
  new Promise((resolve, reject) => {
    damriModel.find({})
      .then(damri => resolve(requestResponse.suksesWithData(damri)))
      .catch(error => reject(requestResponse.serverError))
  })

  exports.getbyId = (id) =>
    new Promise((resolve, reject) => {
      damriModel.findOne({
        _id: objectId(id)
      }).then(damri => resolve(requestResponse.suksesWithData(damri)))
      .catch(error => reject(requestResponse.serverError))
    })

    exports.edit = (data, id, changeImage) =>
      new Promise((resolve, reject) => {
        damriModel.updateOne({
          _id: objectId(id)
        }, data)
          .then(() => {
            if (changeImage) {
              deleteImage(data.oldImage)
            }
            resolve(requestResponse.sukses('Berhasil Edit Data Damri'))
          }).catch(() => reject(requestResponse.serverError))
      })

      exports.delete = (id) =>
        new Promise((resolve, reject) => {
          damriModel.findOne({
            _id: objectId(id)
          }).then(damri => {
            damriModel.deleteOne({
              _id: objectId(id)
            }).then(() => {
              deleteImage(damri.image)
              resolve(requestResponse.sukses('Berhasil Delete Data Damri'))
            }).catch(() => reject(requestResponse.serverError))
          })
        })