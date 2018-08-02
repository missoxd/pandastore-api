'use strict'

import uuid4 from 'uuid4' 
import userModel from '../models/user'
import userRepository from '../repositories/user'

export default async ({ name, email, password }) => {

	let result = await userRepository.insert(new userModel(uuid4(), name, email, password))
	console.log(result)

}