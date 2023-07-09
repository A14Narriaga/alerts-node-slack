const { env, slack } = require('../../config')
const slackAlert = require('./slack.alert')
const logAlert = require('./log.alert')
const { getDateTime } = require('./utils')

const AlertProperties = {
	NOTIFICATION: 'notification',
	ERROR: 'error',
	WARNING: 'warning',
	SUCCESS: 'success',
}

function createAlertFunction(alertType) {
	return function (sentence, description = '', sendSlackAlert = true) {
		sendAlert(alertType, sentence.trim(), description, sendSlackAlert)
	}
}

const alert = {
	notification: createAlertFunction(AlertProperties.NOTIFICATION),
	error: createAlertFunction(AlertProperties.ERROR),
	warning: createAlertFunction(AlertProperties.WARNING),
	success: createAlertFunction(AlertProperties.SUCCESS),
}

async function sendAlert(
	property,
	sentence,
	description,
	sendSlackAlert = true
) {
	const dateTime = getDateTime()
	try {
		if (
			(env === 'development' &&
				slack.showDevAlerts === 'true' &&
				sendSlackAlert) ||
			(env !== 'development' && sendSlackAlert)
		) {
			await slackAlert.sendAlert(property, dateTime, sentence, description)
			logAlert.sendAlert(dateTime, property, sentence)
		} else logAlert.sendAlert(dateTime, property, sentence, description)
	} catch (err) {
		logAlert.sendAlert(
			dateTime,
			AlertProperties.ERROR,
			'✉️ Send slack alert error',
			err
		)
		logAlert.sendAlert(dateTime, property, sentence, description)
	}
}

module.exports = {
	alert,
}
