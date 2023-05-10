let model = require("../models/producto_model");

module.exports = {
    show: function (req, res) {
        model.find()
            .then(resultados => {
                res.json(resultados);
            })
            .catch(error => {
                res.sendStatus(500);
                console.log(error);
            });
    },
    detail: function (req, res) {
        let val_id = req.params.id;
        model.findOne({ _id: val_id })
            .then(resultados => {
                res.json(resultados);
            })
            .catch(error => {
                res.sendStatus(500);
                console.log(error);
            });

    },
    create: function (req, res) {
        let obj = new model;
        obj.nombre = req.body.nombre;
        obj.descripcion = req.body.descripcion;
        obj.imagen = req.body.imagen;
        obj.precio = req.body.precio;
        obj.save()
            .then(newData => {
                res.json(newData);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });

    },
    update: function (req, res) {
        let val_id = req.body.id;
        let datos = {
            nombre: req.body.nombre,
            descripcion: req.body.desc,
            imagen: req.body.imagen,
            precio: req.body.precio,
        };
        model.findOneAndUpdate({ _id: val_id }, datos)
            .then(newData => {
                res.json(newData);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    },
    delete: function (req, res) {
        let val_id = req.params.id
        model.deleteOne({_id:val_id})
            .then( estado => {
                res.sendStatus(200);
                console.log(estado);
            }) 
            .catch( error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
}; 