import React from 'react'
import PropTypes from 'prop-types'

class Income extends React.Component {
	setIncome = ( event, field ) => {
		this.props.onChange( event.target.value, field )
	}

	render() {
		return (
			<form>
				<input
					onChange={ ( e ) => this.setIncome( e, 'xSalary' ) }
					defaultValue=""
					type="number"
					placeholder="..X net salary.."
				/>
				<input
					onChange={ ( e ) => this.setIncome( e, 'ySalary' ) }
					defaultValue=""
					type="number"
					placeholder="..Y net salary.."
				/>
			</form>
		)
	}

	static propTypes = {
		onChange: PropTypes.func.isRequired,
	}
}

export default Income
