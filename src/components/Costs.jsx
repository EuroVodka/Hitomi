import React from 'react'
import PropTypes from 'prop-types'

class Costs extends React.Component {
	setCosts = ( event ) => {
		this.props.onChangeCosts( event.target.value, 'totalCost' )
	}

	render() {
		return (
			<form>
				<input
					onChange={ this.setCosts }
					defaultValue=""
					type="number"
					placeholder="..Total cost.."
				/>
			</form>
		)
	}

	static propTypes = {
		onChangeCosts: PropTypes.func.isRequired,
	}
}

export default Costs
