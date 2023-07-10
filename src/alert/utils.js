const twoDigits = (value) => (value < 10 ? `0${value}` : value)

function getDateTime() {
	const today = new Date()
	today.setHours(today.getHours() - 1)
	today.setMonth(today.getMonth() + 1)
	const DD = twoDigits(today.getDate())
	const MM = twoDigits(today.getMonth())
	const YYYY = today.getFullYear()
	const hh = twoDigits(today.getHours())
	const mm = twoDigits(today.getMinutes())
	const ss = twoDigits(today.getSeconds())
	return {
		date: `${DD}/${MM}/${YYYY}`,
		time: `${hh}:${mm}:${ss}`,
	}
}

module.exports = {
	getDateTime,
}
