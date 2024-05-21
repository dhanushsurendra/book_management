import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs';

import classes from './BookForm.module.css'

function BookForm() {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [genre, setGenre] = useState('')
	const [publishedYear, setPublishedYear] = useState(dayjs(new Date())) // State for the selected date
	const [titleError, setTitleError] = useState('')
	const [authorError, setAuthorError] = useState('')
	const [genreError, setGenreError] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validate()) {
			console.log('Form submitted:', {
				title,
				author,
				genre,
				publishedYear
			})
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
								onChange={(date) => setPublishedYear(date)}
								slotProps={{ textField: { variant: 'outlined' } }}
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
					Submit
				</Button>
			</form>
		</div>
	)
}

export default BookForm
