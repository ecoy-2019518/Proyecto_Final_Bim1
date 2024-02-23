import express from 'express'
import { deleteU, login, register, test, update } from './user.controller.js'
import { validateJwt, isAdmin } from '../middleware/validate-jws.js';

const api = express.Router();

api.get('/test', test)
api.post('/register', [validateJwt], register)
api.post('/login',[validateJwt], login)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteU)

export default api