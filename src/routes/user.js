'use strict'

import createUser from '../services/create-user'

export default (app) => {

	app.post('/users', (req, res) => {
		createUser(req.body)
	})

}