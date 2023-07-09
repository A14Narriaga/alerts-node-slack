const { env, slack } = require('../../config')

const colors = {
	notification: '#004cbe',
	error: '#be0000',
	warning: '#b86e00',
	success: '#0e7900',
}

module.exports = ({ property, dateTime, sentence, description }) =>
	JSON.stringify({
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `🔔 New ${property} alert ocurred in \`api\` from <${slack.projectLink}|${env}>`,
				},
			},
		],
		attachments: [
			{
				color: colors[property],
				blocks: [
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `🗓️ ${dateTime.date} \t🕑 ${dateTime.time}\n⟶ ${sentence}`,
						},
					},
					...(description && [
						{
							type: 'section',
							text: {
								type: 'mrkdwn',
								text: `\`\`\`${description}\`\`\``,
							},
						},
					]),
				],
			},
		],
	})
