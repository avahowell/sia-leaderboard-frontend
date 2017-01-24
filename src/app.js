import React, { PropTypes } from 'react'
import Leaderboard from './leaderboard.js'
import { List } from 'immutable'

const appStyle = {
}

const App = ({entries, sort, onSort}) => (
	<div style={appStyle}>
		<select onChange={onSort}>
			<option value="uploaded">Uploaded</option>
			<option value="timestamp">Timestamp</option>
		</select>
		<Leaderboard sort={sort} groupFilters={[]} entries={entries} />
	</div>
)

App.propTypes = {
	entries: PropTypes.instanceOf(List).isRequired,
	sort: PropTypes.string.isRequired,
	onSort: PropTypes.func.isRequired,
}

export default App
