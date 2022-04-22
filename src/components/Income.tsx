import { TextInput } from 'evergreen-ui';
import PropTypes from 'prop-types';
import React from 'react';

class Income extends React.Component {
	setIncome = ( event, field ) => {
		const value = event.target.value
		// @ts-ignore
		!isNaN( value ) && this.props.onChangeIncome( value, field )
	};

	render() {
		return (
			<>
				<div className="input-field">
					<label htmlFor="a_income"><strong>A</strong> income</label>
					<TextInput
						onChange={ ( e ) => this.setIncome( e, '1' ) }
						name="a_income"
						// @ts-ignore
						value={ this.props.a_Income }
						placeholder="person A income"
						height={ 48 }
					/>
				</div>
				<div className="input-field">
					<label htmlFor="b_income"><strong>B</strong> income</label>
					<TextInput
						onChange={ ( e ) => this.setIncome( e, '2' ) }
						name="b_income"
						// @ts-ignore
						value={ this.props.b_Income }
						placeholder="person B income"
						height={ 48 }
					/>
				</div>
			</>
		)
	}

	static propTypes = {
		onChangeIncome: PropTypes.func.isRequired,
		a_Income: PropTypes.number.isRequired,
		b_Income: PropTypes.number.isRequired,
	};
}

export default Income
