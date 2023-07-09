const colors = require('colors/safe')

colors.setTheme({
	notification: 'blue',
	error: 'red',
	warning: 'yellow',
	success: 'green',
})

const icons = {
	notification: '🔵',
	error: '🔴',
	warning: '🟡',
	success: '🟢',
}

function sendAlert(dateTime, property, sentence, description = '') {
	console.log(
		colors[property](
			`📆 ${dateTime.date},${dateTime.time} ${icons[property]} ⟶ ${sentence}`
		)
	)
	description && console.log(colors[property](`⟶ ${description}`))
}

module.exports = {
	sendAlert,
}
