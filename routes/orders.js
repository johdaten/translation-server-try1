import express from 'express'
const router = express.Router()
import Order from '../models/order.js'

// Creating an Order
router.post('/', async (req, res) => {
    const order = new Order({
        files: req.body.files,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message,
    })

    try {
        const newOrder = await order.save()
        res.status(201).json(newOrder)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default router