const mongoose = require('mongoose')

const voitureSchema = mongoose.Schema({
    make: {
        type: String,
        required: [true, 'Ajouter un maker']
    },
    model: {
        type: String,
        required: [true, 'Ajouter un modele']
    },
    year: {
        type: Date,
        required: [true, 'Ajouter une année de contruction']
    },
    transmission: {
        type: String
    },
    fuelType: {
        type: String
    },
    mileage: {
        type: Number
    },
    price: {
        type: Number,
        required: [true, 'Ajouter un prix']
    },
    sales: {
        type: Number,
        default: 0
    },
    country: {
        type: String,
        required: [true, 'Ajouter un pays']
    },
    inStock: {
        type: Boolean
    }
})

const voitureModel = mongoose.model('voitures', voitureSchema)

module.exports = voitureModel