const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const CircularJSON = require('circular-json')
app.listen(7777)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const getData = async () => {
	try {
		return await axios.get('http://mon.phuket.psu.ac.th/arubalog/2019-01-16.log')
	} catch (error) {
		console.error(error)
	}
}

const countData = async () => {
	const data = await getData()
	// console.log('---------------------------------',data.data)
	const json = CircularJSON.stringify(data.data)

	console.log('kuykuykuykuykuykuy')
	console.log(json)
	console.log('kuykuykuykuykuykuy')
	app.get('/api/getpsu', (req, res) => {
		res.json(json)
	})
}

countData()
