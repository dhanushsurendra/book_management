import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import axios from 'axios'

import { TextField, Button, Typography } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { ClipLoader } from 'react-spinners'

import classes from './BookForm.module.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function BookForm() {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [genre, setGenre] = useState('')
	const [publishedYear, setPublishedYear] = useState(dayjs(new Date())) // State for the selected date
	const [titleError, setTitleError] = useState('')
	const [authorError, setAuthorError] = useState('')
	const [genreError, setGenreError] = useState('')
	const [submit, setSubmit] = useState(false)
	const [isFetching, setIsFetching] = useState(false)
	const loginToken = useSelector((state) => state.login.token)

	let { id } = useParams()

	if (id === 'new') id = undefined

	const navigate = useNavigate()

	useEffect(() => {
		if (id) {
			const getBook = async (id) => {
				try {
					setIsFetching(true)
					const url = process.env.REACT_APP_API_URL + `books/${id}`
					const { data } = await axios.get(url, {
						headers: {
							Authorization: `Bearer ${loginToken}`
						}
					})
					setTitle(data.data.title)
					setAuthor(data.data.author)
					setGenre(data.data.genre)

					// set date
					const date = new Date()
					date.setFullYear(data.data.yearPublished)
					setPublishedYear(dayjs(date))

					setIsFetching(false)
				} catch (error) {
					console.log(error)
					setIsFetching(false)
				}
			}
			getBook()
		}
	}, [id, loginToken])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (validate()) {
			setSubmit(true)
			const year = publishedYear['$y']
			const value = {
				id,
				title,
				genre,
				author,
				yearPublished: year
			}
			const url =
				process.env.REACT_APP_API_URL + (id ? `books/${id}` : `books/`)
			try {
				setSubmit(true)
				if (id)
					await axios.put(url, value, {
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${loginToken}`
						}
					})
				else
					await axios.post(url, JSON.stringify(value), {
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${loginToken}`
						}
					})
				toast.success(id ? 'Update successful!' : 'Create successful')
				setSubmit(false)
				navigate('/books')
			} catch (error) {
				console.log(error)
				setSubmit(false)
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status < 500
				) {
					toast.error(error.response.data)
				} else {
					console.log(error)
					toast.error('Something went wrong!')
				}
			}
		}
	}

	const validate = () => {
		let isValid = true
		if (!title.trim()) {
			setTitleError('Title is required')
			isValid = false
		} else {
			setTitleError('')
		}
		if (!author.trim()) {
			setAuthorError('Author is required')
			isValid = false
		} else {
			setAuthorError('')
		}
		if (!genre.trim()) {
			setGenreError('Genre is required')
			isValid = false
		} else {
			setGenreError('')
		}
		if (!publishedYear) {
			// Additional validation for date picker
			isValid = false
		}
		return isValid
	}

	return (
		<div className={classes.container}>
			{isFetching && <ClipLoader color="#0a74bb" />}
			{!isFetching && (
				<form onSubmit={handleSubmit} className={classes.form}>
					<h2>Book Information Form</h2>
					<div>
						<TextField
							label="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							fullWidth
							margin="normal"
							error={!!titleError}
							helperText={
								<Typography variant="body1" color="error">
									{titleError}
								</Typography>
							}
						/>
					</div>
					<div>
						<TextField
							label="Author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							fullWidth
							margin="normal"
							error={!!authorError}
							helperText={
								<Typography variant="body1" color="error">
									{authorError}
								</Typography>
							}
						/>
					</div>
					<div>
						<TextField
							label="Genre"
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
							fullWidth
							margin="normal"
							error={!!genreError}
							helperText={
								<Typography variant="body1" color="error">
									{genreError}
								</Typography>
							}
						/>
					</div>
					<div>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={['DatePicker']}>
								<DatePicker
									views={['year']}
									label="Date Published"
									value={publishedYear}
									maxDate={dayjs(new Date())}
									onChange={(date) => {
										setPublishedYear(
											dayjs(
												new Date().setFullYear(
													date['$y']
												)
											)
										)
									}}
									slotProps={{
										textField: { variant: 'outlined' }
									}}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</div>
					<Button
						style={{
							marginTop: '2rem',
							width: '100%',
							padding: '1rem'
						}}
						type="submit"
						variant="contained"
						color="primary"
					>
						{submit && <ClipLoader color="#fff" size={12} />}
						{!submit && 'Submit'}
					</Button>
				</form>
			)}
		</div>
	)
}

export default BookForm
