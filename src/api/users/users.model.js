const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName: { type: String, trim: true, required: true, unique: true },
    userName: { type: String, trim: true, required: true, unique: true },
    age: { type: Number, trim: true, required: true},
    house: { type: String, trim: true, required: true},
    password: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true }
}, { timestamps: true, collection: 'users'})


userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
const User = mongoose.model('users', userSchema)
module.exports = User