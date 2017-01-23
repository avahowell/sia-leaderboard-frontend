import ReactDOM from 'react-dom'
import React from 'react'
import { List } from 'immutable'
import App from './app.js'

// pull in and parse entries from the API here...
// using testdata for now
//
const testEntries = List([
	{ name: 'testuser1', numBytes: 1e9, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser2', numBytes: 1e9*5, lastUpdated: new Date(), groups: ['group2']},
	{ name: 'testuser3', numBytes: 1e9*2, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser9', numBytes: 1e9*0.5, lastUpdated:  new Date(), groups: ['group1', 'group2']},
	{ name: 'testuser5', numBytes: 1e9*0.2, lastUpdated: new Date(1000), groups: ['group1']},
])

const onSortChange = (e) =>
	ReactDOM.render(
		<App
			entries={testEntries}
			groupFilters={[]}
			sort={e.target.value}
			onSort={onSortChange}
		/>,
		document.getElementById('react-root')
	)

ReactDOM.render(<App entries={testEntries} groupFilters={[]} sort="" onSort={onSortChange} />, document.getElementById('react-root'))

