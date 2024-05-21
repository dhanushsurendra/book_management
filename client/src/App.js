import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './containers/Home/Home'
import Books from './containers/Books/Books'
import Navigation from './components/Navigation/Navigation'
import BookForm from './components/BookItems/BookForm/BookForm'

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/books/:id" element={<BookForm />} />
				<Route path="/books" element={<Books />} />
				<Route path="/logout" />
			</Routes>
		</Router>
	)
}

export default App
