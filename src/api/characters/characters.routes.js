const CharacterRoutes = require('express').Router();
const { postNewCharacter, getCharacter, patchCharacter, deleteCharacter, getCharacters } = require('./characters.controller');

CharacterRoutes.post('/', postNewCharacter);
CharacterRoutes.get('/', getCharacters);
CharacterRoutes.get('/:id', getCharacter);
CharacterRoutes.patch('/:id', patchCharacter);
CharacterRoutes.delete('/:id', deleteCharacter);

module.exports = CharacterRoutes;