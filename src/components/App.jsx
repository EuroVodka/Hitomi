import { Heading, minorScale, Pane } from 'evergreen-ui'
import React, { useState } from 'react'
import ErrorCatcher from '../utilities/ErrorCatcher'
import Costs from './Costs'
import Income from './Income'
import Output from './Output'

function App() {
	const [Incomes, setIncomes] = useState({ 1: 0, 2: 0 })
	const [TotalCost, setTotalCost] = useState( 0 )

	const totalSalaries = Incomes[1] + Incomes[2]

	const percentageX = ( 100 * Incomes[1]) / totalSalaries
	const percentageY = ( 100 * Incomes[2]) / totalSalaries

	const amoutCostX = (( TotalCost * percentageX ) / 100 ).toFixed( 2 )
	const amoutCostY = (( TotalCost * percentageY ) / 100 ).toFixed( 2 )



	const onChangeAmount = ( value, whichIncome ) => {
		setIncomes(( prevState ) =>
			({ ...prevState, [whichIncome]: parseInt( value, 10 ) || 0 }))
	}



	return (
		<ErrorCatcher>
			<div className="main">
				<Pane padding={ minorScale( 2 ) }>
					<Heading size={ 800 } marginTop={ 16 } className="title" >
            Hitomi
					</Heading>
				</Pane>
				<form>
					<Pane
						elevation={ 2 }
						padding={ minorScale( 4 ) }
						border="default"
						background="tint1"
					>
						<Income
							a_Income={ Incomes[1] }
							b_Income={ Incomes[2] }
							onChangeIncome={ onChangeAmount }
						/>
					</Pane>
					<Pane
						elevation={ 2 }
						padding={ minorScale( 4 ) } b
						order="default"
						background="tint1"
					>
						<Costs
							totalCost={ TotalCost }
							onChangeCosts={ setTotalCost }
						/>
					</Pane>
				</form>
				<Pane
					elevation={ 1 }
					padding={ minorScale( 1 ) }
					margin={ minorScale( 3 ) }
					border="default"
					background="tint1"
					className="separate-context"
				>
					<Output amount={ +amoutCostX } />
					<Output amount={ +amoutCostY } />
				</Pane>
			</div>

		</ErrorCatcher>
	)
}

export default App

/*
X 2000
Z 1000

Costs: 1000

X 66.6% = 799.2
*/
