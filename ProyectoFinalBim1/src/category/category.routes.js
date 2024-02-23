import express from 'express'
import { test, save } from './category.controller.js'

const api = express.Router();

//Rutas
api.get('/test', test)
api.post('/save', save)

export default api