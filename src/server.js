import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'

const app = express();
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
const Database = require('sqlite-async')

app.use(express.urlencoded())
app.use(express.json())

const main = async () => {
	let db;
	try {
        db = await Database.open("test.db");
    } catch (error) {
        throw Error('can not access sqlite database');
    }
    app.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(3000, err => {
		if (err) throw err;
		console.log(`> Running on localhost:3000`);
	});
}

main();