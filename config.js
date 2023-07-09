module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	slack: {
		projectUrl: process.env.SLACK_PROJECT_URL,
		showDevAlerts: process.env.SLACK_SHOW_DEV_ALERTS,
		projectLink: process.env.SLACK_PROJECT_LINK,
	},
}
