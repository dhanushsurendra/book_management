import React from 'react'
import { Link } from 'react-router-dom'

import BookItems from '../../components/BookItems/BookItems'
import { IoIosAdd } from 'react-icons/io'

import classes from './Books.module.css'

const Books = () => {
	return (
		<>
			<section className={classes.container}>
				<div className={classes.div}>
					<BookItems className={classes['books-container']} />
				</div>
			</section>
			<div>
				<Link to={`/books/new`} className={classes['add-icon-container']}>
					<IoIosAdd className={classes['add-icon']} />
				</Link>
			</div>
		</>
	)
}

export default Books
