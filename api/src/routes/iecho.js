const { Router } = require('express')
const { getInvertedText } = require('../controllers/iecho')
const iechoRoute = Router()

iechoRoute.get('/', getInvertedText)
module.exports = iechoRoute
