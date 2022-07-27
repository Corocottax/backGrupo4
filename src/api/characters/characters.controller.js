const Character = require("./characters.model");
const { setError } = require("../../utils/error/error");

const postNewCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body);
        const characterDB = await newCharacter.save();
        return res.status(201).json(characterDB);
    } catch (error) {
        return next(error);
    }
};

const patchCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const patchCharacter = new Character(req.body);
        patchCharacter._id = id;
        const characterDB = await Character.findByIdAndUpdate(id, patchCharacter);
        if (!characterDB) {
            return next(setError(404, "Character not found"));
        }
        return res.status(200).json({ new: patchCharacter, old: characterDB });
    } catch (error) {
        return next(setError(500, "Character cant be replaced"));
    }
};

const getCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterDB = await Character.findById(id);
        if (!characterDB) {
            return next(setError(404, "Character not found"));
        }
        return res.status(200).json(characterDB);
    } catch (error) {
        return next(setError(404, "Character server fail"));
    }
};


const getCharacters = async (req, res, next) => {
    try {
        const characterDB = await Character.find();
        return res.status(200).json(characterDB);
    } catch (error) {
        return next(setError(404, "Character server fail"));
    }
};

const deleteCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterDB = await Character.findByIdAndRemove(id);
        if (!characterDB) {
            return next(setError(404, "Error deleting character"));
        }
        return res.status(200).json(characterDB);
    } catch (error) {
        return next(setError(500, "Character cant be removed"));
    }
};

module.exports = {
    postNewCharacter,
    patchCharacter,
    getCharacter,
    deleteCharacter,
    getCharacters
};
