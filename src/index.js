/* eslint react/jsx-filename-extension: 0 */
import React from 'react'
import { render } from 'react-dom'

import './styles/style.css'
import ErrorCatcher from './utilities/ErrorCatcher'
import App from './components/App'
import { SalariesProvider } from './contexts/SalariesContext'
import { TotalCostsProvider } from './contexts/TotalCostsContext'

const app = (
	<ErrorCatcher>
		<SalariesProvider>
			<TotalCostsProvider>
				<App />
			</TotalCostsProvider>
		</SalariesProvider>
	</ErrorCatcher>
)

render( app, document.getElementById( 'root' ) )
