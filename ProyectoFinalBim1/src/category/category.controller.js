'use strict'//Modo estricto

import Category from './category.model.js'

export const test = (req, res) => {
    console.log('test is running')
    return res.send({ message: 'test function is running' })
}

export const save = async (req, res) => {
    try {
        let data = req.body
        let category = new Category(data)
        await category.save()
        return res.send({ message: 'Category saved succesfully' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error saving category' })
    }
}