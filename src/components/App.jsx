import React, { useContext } from 'react'

import Income from './Income'
import Costs from './Costs'
import Output from './Output'
import ErrorCatcher from './../utilities/ErrorCatcher'
import { SalariesContext } from '../contexts/SalariesContext'
import { TotalCostsContext } from '../contexts/TotalCostsContext'

const App = () => {
	//useContext returns the Context Provider value
	//which is an Object containing all the salaries related vars and methods
	const { xSalary, ySalary, onChange } = useContext( SalariesContext )
	const { totalCost, onChangeCosts } = useContext( TotalCostsContext )

	const totalSalaries = xSalary + ySalary

	const percentageX = ( 100 * xSalary ) / totalSalaries
	const percentageY = ( 100 * ySalary ) / totalSalaries

	const amountCostX = ( ( totalCost * percentageX ) / 100 ).toFixed( 2 )
	const amountCostY = ( ( totalCost * percentageY ) / 100 ).toFixed( 2 )

	return (
		<ErrorCatcher>
			<section>
				<h2>Relative Expanses</h2>
				<Income xSalary={ xSalary } ySalary={ ySalary } onChange={ onChange } />
				<hr />
				<Costs totalCost={ totalCost } onChangeCosts={ onChangeCosts } />
				<Output amount={ +amountCostX } />
				<Output amount={ +amountCostY } />
			</section>
		</ErrorCatcher>
	)
}

export default App
