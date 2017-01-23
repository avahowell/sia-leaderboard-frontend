import React, { PropTypes } from 'react'
import LeaderboardEntry from './leaderboardentry.js'
import { List } from 'immutable'

const leaderboardStyle = {
}

const Leaderboard = ({entries}) => (
	<div style={leaderboardStyle}>
		{entries.map((entry, key) =>
			<LeaderboardEntry key={key} name={entry.name} numBytes={entry.numBytes} lastUpdated={entry.lastUpdated} />
		)}
	</div>
)

Leaderboard.propTypes = {
	entries: PropTypes.instanceOf(List).isRequired,
}

export default Leaderboard

