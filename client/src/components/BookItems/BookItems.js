import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../redux/axiosInstance'

import BookItem from './BookItem/BookItem'
import Search from '../Search/Search'
import { toast } from 'react-toastify'
import axios from 'axios'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination';

import { ClipLoader } from 'react-spinners'

import classes from './BookItems.module.css'

const Books = () => {
	const [books, setBooks] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [query, setQuery] = useState('')
	const [open, setOpen] = useState(false)
	const [bookId, setBookId] = useState('')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	const navigate = useNavigate();

	const params = useParams();
	console.log(params)
	const limit = 9

	useEffect(() => {
		getBooks()
	}, [query, page])

	const handleClickOpen = (open, id) => {
		setOpen(open)
		setBookId(id)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const deleteBook = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + `books/${bookId}`
			await axios.delete(url)
			toast.success('Deleted successfully!')
			setOpen(false)
			window.location.reload()
		} catch (error) {
			console.log(error)
			toast.error('Delete failed!')
			setOpen(false)
		}
	}

	const getBooks = async () => {
		try {
			console.log(`Page number is: ${page}`);
			setIsFetching(true)
			const url = process.env.REACT_APP_API_URL + `books?page=${page}&limit=${!limit ? 9 : limit}&keyword=${query}`
			const { data } = await axiosInstance.get(url)
			setBooks(data.books)
			console.log(totalPages)
			setTotalPages(data.totalPages)
			setIsFetching(false)
		} catch (error) {
			console.log(error)
			setIsFetching(false)
		}
	}

	const handlePageChange = (_, value) => {
		console.log(value);
		navigate(`?page=${value}&limit=9`);
		setPage(value)
	}

	return (
		<>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Delete book?</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Are you sure you want to delete this book? This action
						cannot be undone.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
					<Button color="error" onClick={deleteBook}>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
			<Search query={(q) => setQuery(q)} />
			{isFetching && <ClipLoader color="#0a74bb" />}
			{books.length === 0 && !isFetching ? <p>No books found</p> : null}
			{!isFetching && (
				<div className={classes['books']}>
					{books.map((book) => (
						<BookItem
							open={handleClickOpen}
							key={book._id}
							book={book}
						/>
					))}
				</div>
			)}
			{!isFetching && <Pagination style={{ marginTop: '3rem'}} count={totalPages} page={page} onChange={handlePageChange} />}
		</>
	)
}

export default Books
