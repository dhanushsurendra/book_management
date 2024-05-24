import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineModeEditOutline } from 'react-icons/md'
import { MdDeleteOutline } from 'react-icons/md'

import classes from './BookItem.module.css'

const Book =  ({ book, open }) => {

	const handleClickOpen = () => {
		open(true, book._id)
	}

	return (
		<div className={classes.book}>
			<div className={classes['book-image-container']}>
				<img
					alt="not"
					src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
				/>
			</div>
			<div className={classes['book-content']}>
				<div className={classes['book-header']}>
					<p className={classes['book-title']}>{book.title}</p>
					<p style={{ fontSize: '1.6rem' }}>{book.yearPublished}</p>
				</div>
				<div className={classes['book-info']}>
					<p style={{ marginRight: '2rem', color: '#303032' }}>
						{book.author}
					</p>
					<p style={{ color: '#303032' }}>{book.genre}</p>
					<Link
						className={classes['book-edit-container']}
						to={`/books/${book._id}`}
						style={{ textDecoration: 'none' }}
					>
						<span>Edit</span>
						<MdOutlineModeEditOutline
							className={classes['edit-icon']}
						/>
					</Link>
				</div>
			</div>
			<div className={classes['book-delete-continer']}>
				<MdDeleteOutline
					onClick={handleClickOpen}
					className={classes['delete-icon']}
				/>
			</div>
		</div>
	)
}

export default Book
