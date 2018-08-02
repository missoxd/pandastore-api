'use strict'

import ow from 'ow'

export default class user {

	constructor (uuid, name, email, password) {
		ow(uuid, ow.string.matches(/^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i))
		ow(name, ow.string)
		ow(email, ow.string)
		ow(password, ow.string)

		this.uuid = uuid
		this.name = name
		this.email = email
		this.password = password
	}
}