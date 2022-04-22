/* eslint  no-console: off */
import PropTypes from 'prop-types'
import React from 'react'

export default class ErrorCatcher extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errorFound: false,
		}
	}

	componentDidCatch(error, info) {
		this.setState((state) => ({
			// @ts-ignore
			errorFound: !state.errorFound,
		}))
		console.log('error: ', error)
		console.log('info: ', info)
	}

	render() {
		// @ts-ignore
		return this.state.errorFound ? (
			<p>
				Error caught!
				{ }
				The calculator becomes useless with just a single error.
			</p>
		) : (
			this.props.children
		)
	}

	static propTypes = {
		children: PropTypes.element,
	}
}
