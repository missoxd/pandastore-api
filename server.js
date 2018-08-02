'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './src/routes/user'

const app = express()

app.use(bodyParser.json())

userRoutes(app)

// app.get('/createCustomer', (req, res) => {
// 	try {
// 		createCustomer(new customer)
// 	} catch (e) {
// 		res.send(e.message)
// 	} 
// })

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})