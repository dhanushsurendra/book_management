import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineModeEditOutline } from 'react-icons/md'
import { MdDeleteOutline } from 'react-icons/md'

import classes from './BookItem.module.css'

const Book = ({ book, open }) => {
	const handleClickOpen = () => {
		open(true, book._id)
	}

	return (
		<div className={classes.book}>
			<div className={classes['book-content']}>
				<div className={classes['book-header']}>
					<p className={classes['book-title']}>{book.title}</p>
					<p style={{ fontSize: '1.6rem' }}>Year: {book.yearPublished}</p>
				</div>
				<div className={classes['book-info']}>
					<p style={{ marginRight: '2rem', color: '#303032' }}>
						Author: {book.author}
					</p>
					<p style={{ color: '#303032' }}>Genre: {book.genre}</p>
				</div>
				<div className={classes['book-buttons-container']}>
					<Link
						className={classes['book-edit-container']}
						to={`/books/${book._id}`}
						style={{ textDecoration: 'none' }}
					>
						<MdOutlineModeEditOutline
							className={classes['edit-icon']}
						/>
					</Link>
					<div className={classes['book-delete-continer']}>
						<MdDeleteOutline
							onClick={handleClickOpen}
							className={classes['delete-icon']}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Book
