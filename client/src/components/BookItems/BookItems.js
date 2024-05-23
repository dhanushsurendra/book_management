import { useEffect, useState } from 'react'

import BookItem from './BookItem/BookItem'
import axiosInstance from '../../redux/axiosInstance'

import classes from './BookItems.module.css'
import Search from '../Search/Search'
import { ClipLoader } from 'react-spinners'

const Books = () => {
	const [books, setBooks] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [query, setQuery] = useState('')

	useEffect(() => {
		getBooks()
	}, [query])

	const getBooks = async () => {
		try {
			setIsFetching(true)
			const url = process.env.REACT_APP_API_URL + `books?keyword=${query}`
			const { data } = await axiosInstance.get(url)
			setBooks(data.books)

			setIsFetching(false)
		} catch (error) {
			console.log(error)
			setIsFetching(false)
		}
	}

	return (
		<>
			<Search query={(q) => setQuery(q)} />
			{isFetching && <ClipLoader color="#0a74bb" />}
			{books.length === 0 ? <p>No books found</p> : null}
			{!isFetching && (
				<div className={classes['books']}>
					{books.map((book) => (
						<BookItem key={book._id} book={book} />
					))}
				</div>
			)}
		</>
	)
}

export default Books
