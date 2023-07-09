const twoDigits = (value) => (value < 10 ? `0${value}` : value)

function getDateTime() {
	const today = new Date()
	const DD = twoDigits(today.getDay())
	const MM = twoDigits(today.getMonth() + 1)
	const YYYY = today.getFullYear()
	const hh = twoDigits(today.getHours() - 1)
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
