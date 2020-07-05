const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DamriSchema = new Schema({
  namaDamri: {
    type: String
  },
  tipe: {
    type: String
  },
  rute: {
    type: String
  },
  harga: {
    type: Number
  },
  jadwal: {
    type: String
  },
  deskripsi: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('damri', DamriSchema)