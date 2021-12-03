import React from 'react'
import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Main from './main/Main'
import Card from './card/Card'
import Error from './main/Error'

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path='/' element={<Main />}/>
					<Route path='/card/:username/:reponame' element={<Card />}/>
					<Route path='/error' element={<Error />}/>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
