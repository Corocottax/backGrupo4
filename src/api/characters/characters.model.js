const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    age: { type: String, trim: true, required: true },
    gender: { type: String, trim: true, required: true},
    class: { type: String, trim: true, required: true},
    background: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true }
}, { timestamps: true, collection: 'characters'})

const Character = mongoose.model('characters', characterSchema)
module.exports = Character