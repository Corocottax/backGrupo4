const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    userName: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true },
    age: { type: String, trim: true, required: true},
    house: { type: String, trim: true, required: true},
    password: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: false },
    character: { type: mongoose.Schema.Types.ObjectId, ref:"characters", trim: true, required: false}
}, { timestamps: true, collection: 'users'})


userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
const User = mongoose.model('users', userSchema)
module.exports = User