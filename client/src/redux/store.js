import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { booksSlice } from './booksSlice'

const reducers = combineReducers({
	books: booksSlice
})

const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
})

export default store