import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../slice/book';

const rootReducer = {
    book: bookReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store 