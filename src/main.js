import ReactDOM from 'react-dom'
import React from 'react'
import { List } from 'immutable'
import Leaderboard from './leaderboard.js'

const testEntries = List([
	{ name: 'testuser1', numBytes: 1e9, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser2', numBytes: 1e9*5, lastUpdated: new Date(), groups: ['group2']},
	{ name: 'testuser3', numBytes: 1e9*2, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser9', numBytes: 1e9*0.5, lastUpdated:  new Date(), groups: ['group1', 'group2']},
	{ name: 'testuser5', numBytes: 1e9*0.2, lastUpdated: new Date(), groups: ['group1']},
])

ReactDOM.render(<Leaderboard entries={testEntries} groupFilters={[]} sort="" />, document.getElementById('react-root'))

