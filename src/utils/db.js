import knex from 'knex'

export default knex({
	dialect: 'sqlite3',
	connection: {
		filename: __dirname + '/../../storage/db.sqlite3'
	}
})