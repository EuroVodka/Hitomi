import React, { Component } from 'react'
import PropTypes from 'prop-types'

const initialState = {
	totalCost: 0,
}

const TotalCostsContext = React.createContext( initialState )

class TotalCostsProvider extends Component {
	//equivalent of Redux Store (just a slice)
	state = initialState

	onChangeCosts = ( value, stateField ) => {
		this.setState( {
			[stateField]: parseInt( value, 10 ) || 0,
		} )
	}

	render() {
		return (
			<TotalCostsContext.Provider
				value={ {
					totalCost: this.state.totalCost,
					onChangeCosts: this.onChangeCosts,
				} }
			>
				{ this.props.children }
			</TotalCostsContext.Provider>
		)
	}

	static propTypes = {
		children: PropTypes.node,
	}
}

export { TotalCostsProvider, TotalCostsContext }
