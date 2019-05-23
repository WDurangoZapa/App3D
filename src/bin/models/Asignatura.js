const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asignaturaSchema = new Schema({
  nombre: String,
  intensidad_H: Number,
  unidades: String,


});

var Asignatura = mongoose.model("Asigantura", asignaturaSchema);
module.exports = Asignatura;
