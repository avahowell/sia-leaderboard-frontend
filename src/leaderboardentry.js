import React, { PropTypes } from 'react'

const entryStyle = {
}

const LeaderboardEntry = ({name, numBytes, lastUpdated}) => (
	<div style={entryStyle}>
		<div>{name}</div>
		<div>{numBytes/1e9} GB</div>
		<div>Last Updated: {lastUpdated}</div>
	</div>
)

LeaderboardEntry.propTypes = {
	name: PropTypes.string.isRequired,
	numBytes: PropTypes.number.isRequired,
}

export default LeaderboardEntry

