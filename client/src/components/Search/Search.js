import { useState } from 'react'
import { TextField } from '@mui/material'
import { MdSearch } from 'react-icons/md'

import classes from './Search.module.css'

const Search = ({ query }) => {
    
    const [text, setText] = useState('')
	const onChange = (e) => {
		setText(e.target.value)
		query(e.target.value)
	}

	return (
		<TextField
			value={text}
			className={classes.input}
			placeholder="Search"
			variant="outlined"
			InputProps={{
				startAdornment: (
					<MdSearch
						size={20}
						color="disabled"
						style={{ marginRight: '1rem' }}
					/>
				)
			}}
			onChange={onChange}
		/>
	)
}

export default Search
