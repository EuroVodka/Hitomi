import { TextInput } from 'evergreen-ui'
import React from 'react'

type propTypes = {
	onChangeCosts: ( bla: number ) => void,
	totalCost: number,
}

function Costs( props: propTypes ) {
	const setCosts = ( event ) => {
		const value = event.target.value
		!isNaN( value ) && props.onChangeCosts( event.target.value )
	}


	return (
		<div className="input-field">
			<label htmlFor="costs">Total costs</label>
			<TextInput
				onChange={ setCosts }
				name="costs"
				value={ props.totalCost }
				placeholder="..Total cost.."
				height={ 48 }
			/>
		</div>
	)
}

export default Costs
