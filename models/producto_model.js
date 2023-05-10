var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/test");
var modelSchema = new Schema({
    nombre: {type:String, required:true},
    descripcion: {type:String, required:true},
    imagen: String,
    precio: {type:String, required:true}
});
model = mongoose.model('producto',modelSchema,'producto');
module.exports = model;