import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { TData } from "../types/types";

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

export const searchBook = createAsyncThunk(
    "book/searchBook", 
    async function (search: string | undefined, {rejectWithValue}) {
        try {
            const response = await fetch(`https://api.itbook.store/1.0/search/${search}`);
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
        books: [],
        error: null,
        status: null, 
        book: null, 
        cart: [], 
        favorites: [], 
        total: 0, 
        search: [], 
        totalCart: 0, 
        totalFavorites: 0, 
        // idToCount: new Map()
    },
    reducers: {
        addToCartRedux(state: any, {payload}: {payload :any}) {
            state.cart.push(payload);
        },
        addToFavoriteRedux(state: any, {payload}: {payload :any}) {
            if (!state.favorites.find((item: TData) => item.isbn13 === payload.isbn13)) {
                state.favorites.push(payload);
            }
        },
        removeBookFromCartRedux(state: any, {payload}: {payload :any}) {
            const index = state.cart.findIndex((item: TData) => item.isbn13 === payload);
            state.cart.splice(index, 1);
        }, 
        removeBookFromFavoriteRedux(state: any, {payload}: {payload :any}) {
            const index = state.favorites.findIndex((item: TData) => item.isbn13 === payload);
            state.favorites.splice(index, 1);
        }, 
        countCartRedux(state: any) {
            const result = state.cart.reduce((count: number, item: any) => {
                return Number(item.price.slice(1)) + count;
            }, 0);
            state.total = result;
        }, 
        calcTotalCartRedux(state: any) {
            state.totalCart = state.cart.length;
        }, 
        calcTotalFavoritesRedux(state: any) {
            state.totalFavorites = state.favorites.length;
        }
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
            state.book = null;
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
        }),
        builder.addCase(searchBook.pending, (state: any) => {
            state.status = 'loading';
            state.error = null;
        }), 
        builder.addCase(searchBook.fulfilled, (state: any, {payload}: {payload :any}) => {
            state.status = 'resolved';
            state.error = null;
            if (payload.books === undefined) {
                state.search = [];
            } else {
                state.search = payload.books;
            }
        }), 
        builder.addCase(searchBook.rejected, (state: any, {payload}: {payload :any}) => {
            state.status = 'rejected';
            state.error = payload;
        })      
    }
})

const {actions, reducer} = bookSlice;

export default reducer;
export const {addToCartRedux, addToFavoriteRedux, removeBookFromCartRedux, removeBookFromFavoriteRedux, countCartRedux, calcTotalCartRedux, calcTotalFavoritesRedux} = actions;