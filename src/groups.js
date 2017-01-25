import ReactDOM from 'react-dom'
import React from 'react'
import { List } from 'immutable'
import GroupLeaderboard from './groupleaderboard.js'

// pull in and parse entries from the API here...
// using testdata for now
const testEntries = List([
	{ name: 'testuser1', size: 1e9, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser2', size: 1e9*5, lastUpdated: new Date(), groups: ['group2']},
	{ name: 'testuser3', size: 1e9*2, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser9', size: 1e9*0.5, lastUpdated:  new Date(), groups: ['group1', 'group2']},
	{ name: 'testuser5', size: 1e9*0.2, lastUpdated: new Date(1000), groups: ['group1']},
])

const render = () => {
	ReactDOM.render(
		<GroupLeaderboard
			entries={testEntries}
		/>,
		document.getElementById('react-root')
	)
}

render()

