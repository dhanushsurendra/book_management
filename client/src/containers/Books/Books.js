import React from 'react'
import BookItems from '../../components/BookItems/BookItems'
import { IoIosAdd } from 'react-icons/io'

import classes from './Books.module.css'

const Books = () => {
	return (
		<>
			<section className={classes['books-container']}>
				<BookItems />
			</section>
			<div className={classes['add-icon-container']}>
				<IoIosAdd className={classes['add-icon']} />
			</div>
		</>
	)
}

export default Books
