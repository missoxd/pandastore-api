'use strict'

import ow from 'ow'
import db from '../utils/db'

export default {

	insert: async (user) => {
		try {
			await db.into('uses').insert(user)
			return true
		} catch (e) {
			return false
		}
	}
	
}