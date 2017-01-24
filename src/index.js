import ReactDOM from 'react-dom'
import React from 'react'
import { List } from 'immutable'
import App from './app.js'

// pull in and parse entries from the API here...
// using testdata for now
const testEntries = List([
	{ name: 'testuser1', numBytes: 1e9, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser2', numBytes: 1e9*5, lastUpdated: new Date(), groups: ['group2']},
	{ name: 'testuser3', numBytes: 1e9*2, lastUpdated: new Date(), groups: ['group1']},
	{ name: 'testuser9', numBytes: 1e9*0.5, lastUpdated:  new Date(), groups: ['group1', 'group2']},
	{ name: 'testuser5', numBytes: 1e9*0.2, lastUpdated: new Date(1000), groups: ['group1']},
])

let sort = 'uploaded'
let groupFilters = []

let render = () => { }

const onSortChange = (e) => {
	sort = e.target.value
	render()
}

const onGroupFilter = (e) => {
	if (e.target.value === 'nofilter') {
		groupFilters = []
	} else {
		groupFilters = [e.target.value]
	}
	render()
}

render = () => {
	ReactDOM.render(
		<App
			entries={testEntries}
			groupFilters={groupFilters}
			sort={sort}
			onSort={onSortChange}
			onGroupFilter={onGroupFilter}
		/>,
		document.getElementById('react-root')
	)
}

render()

