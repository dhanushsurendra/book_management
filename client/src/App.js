import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './containers/Home/Home'
import Books from './containers/Books/Books'
import BookForm from './components/BookItems/BookForm/BookForm'
import NotFound from './containers/NotFound/NotFound'
import Login from './containers/Auth/Auth'
import Navigation from './components/Navigation/Navigation'

const App = () => {
	const loginToken = useSelector((state) => state.login.token)

	return (
		<Router>
			<Navigation />
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/books/:id" element={<BookForm />} />
				<Route path="/books" element={<Books />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{!loginToken ? <Navigate to="/login" replace /> : null}
		</Router>
	)
}

export default App
