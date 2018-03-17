var express = require('express')
var router = express.Router()
const url = require('url')

/* GET users listing. */
router.get('/', function(req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	let url_parts = url.parse(req.url, true)
	let query = url_parts.query
	console.log('test')
	console.log(query)
	if (Object.keys(query).length > 0) {
		res.status(500).send({ error: 'Something failed!' })
	}
	res.send(JSON.stringify({hello: 'hello'}))
})

module.exports = router
