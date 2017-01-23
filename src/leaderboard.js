import React, { PropTypes } from 'react'
import LeaderboardEntry from './leaderboardentry.js'
import { List } from 'immutable'

const leaderboardStyle = {
}

const Leaderboard = ({entries, groupFilters, sort}) => {
	let sortedEntries = entries
	if (sort === 'uploaded') {
		sortedEntries = entries.sortBy((entry) => -entry.numBytes)
	}

	return (
		<div style={leaderboardStyle}>
			{
				sortedEntries.filter((entry) => groupFilters.length === 0 ? true : entry.groups.some((group) => groupFilters.includes(group))).map((entry, key) =>
					<LeaderboardEntry
						key={key}
						name={entry.name}
						numBytes={entry.numBytes}
						lastUpdated={entry.lastUpdated}
						groups={entry.groups}
					/>
				)
			}
		</div>
	)
}

Leaderboard.propTypes = {
	entries: PropTypes.instanceOf(List).isRequired,
	groupFilters: PropTypes.array.isRequired,
	sort: PropTypes.string.isRequired,
}

export default Leaderboard

