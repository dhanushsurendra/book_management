import { useEffect, useState } from 'react'

import BookItem from './BookItem/BookItem'
import axiosInstance from '../../redux/axiosInstance'

import classes from './BookItems.module.css'

const Books = () => {

	const [books, setBooks] = useState([])
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		getBooks()
	}, [])
	
	const getBooks = async () => {
		try {
			setIsFetching(true)
			const url =
			process.env.REACT_APP_API_URL + `books`
			const { data } = await axiosInstance.get(url)
			// console.log(data);
			setBooks(data.books)

			setIsFetching(false)
		} catch (error) {
			console.log(error)
			setIsFetching(false)
		}
	}

	return (
		<div className={classes.books}>
			{books.map(book => <BookItem key={book._id} book={book} />)}
		</div>
	)
}

export default Books
