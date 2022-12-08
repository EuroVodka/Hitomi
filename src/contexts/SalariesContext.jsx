import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

const initialState = {
	xSalary: 0,
	ySalary: 0,
}
const SalariesContext = React.createContext( initialState )

class SalariesProvider extends Component {
	//equivalent of Redux Store (just a slice)
	state = initialState

	//equivalent of actions
	//wich are reducers too at the same time
	onChange = ( value, stateField ) => {
		this.setState( {
			[stateField]: parseInt( value, 10 ) || 0,
		} )
	}

	render() {
		return (
			<SalariesContext.Provider
				value={ {
					xSalary: this.state.xSalary,
					ySalary: this.state.ySalary,
					onChange: this.onChange,
				} }
			>
				{ this.props.children }
			</SalariesContext.Provider>
		)
	}

	static propTypes = {
		children: PropTypes.node,
	}
}

export { SalariesProvider, SalariesContext }
