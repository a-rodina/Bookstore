import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
    "book/getBooks", 
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://api.itbook.store/1.0/new');
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

export const getOneBook = createAsyncThunk(
    "book/getOneBook", 
    async function (bookTd: string | undefined, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.itbook.store/1.0/books/${bookTd}`);
            if(!response.ok) {
                throw new Error("Не удалось загрузить данные")
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        // favorites: [], 
        // activeTab: 'all',
        books: [],
        error: null,
        status: null, 
        book: null
    },
    reducers: {
        // addToFavorite(state: any, {payload}: {payload :any}) {
        //     state.favorites.push(payload);
        // },
        // changeActiveTab(state: any, {payload}: {payload :any}) {
        //     state.activeTab = payload;
        // }
    },
    extraReducers: (builder) => {
        return builder.addCase(getBooks.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(getBooks.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.books = payload.books;
        }), 
        builder.addCase(getBooks.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        }),
        builder.addCase(getOneBook.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(getOneBook.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            state.book = payload;
        }), 
        builder.addCase(getOneBook.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        })
    }
})

const {actions, reducer} = bookSlice;

export default reducer;
export const {} = actions;