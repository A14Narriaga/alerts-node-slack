const { slack } = require('../../config')
const fetch = require('node-fetch')
const sendMsg = require('./slack.alert.json')

const headers = {
	'Content-Type': 'application/json',
}

async function sendAlert(property, dateTime, sentence, description = '') {
	try {
		const rgxEndLine = /(\r\n|\n|\r)/gm
		const rgxSuccess = /ok/gm
		const body = sendMsg({
			property,
			dateTime,
			sentence,
			description,
		})
		const options = { method: 'POST', headers, body };
		const response = await fetch(slack.projectUrl, options)
		for await (const chunk of response.body) {
			const line = chunk.toString('utf8').replace(rgxEndLine, '')
			if (!rgxSuccess.exec(line)) throw Error(line)
		}
	} catch (error) {
		throw Error(error)
	}
}

module.exports = {
	sendAlert,
}
