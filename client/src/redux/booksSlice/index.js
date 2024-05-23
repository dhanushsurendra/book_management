import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: [],
    getBooksProgress: false,
    getBookProgress: false,
    getBooksProgress: false,
    updateBookProgress: false,
    removeBookProgress: false,
    error: false
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBooksStart: (state) => {
            state.getBooksProgress = true;
        },
        getBooksSuccess: (state, action) => {
            state.books = action.payload
            state.getBooksProgress = false;
        },
        getBooksFailure: (state) => {
            state.error = true
            state.getBooksProgress = false;
        },
        // getBookStart: (state) => {
        //     state.getBookProgress = true;
        // },
        // getBookSuccess: (state, action) => {
        //     book = books.find(book => book._id = action.payload._id)
        //     state.getBookProgress = false;
        // },
        // getBookFailure: (state) => {
        //     state.getBookFailure = true;
        // },
        // getBookStart: (state) => {
        //     state.getBooksProgress = true;
        // },
        // updateBookStart: (state, payload) => {

        // }
    }
})