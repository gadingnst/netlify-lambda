const route = require('express').Router()
const mechat = require('./mechat')

route.use('/mechat', mechat)

module.exports = route