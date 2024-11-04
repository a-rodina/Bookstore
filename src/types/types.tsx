export type TInput = {
    compound?: string,
    inputType: string,
    title?: string,
    placeholderText: string,
    isActive: boolean,
    errorText?: string,
    isError?: boolean
}

export type TObject = {
    book: any,
    addToCart?: (book: any) => void,
    addToFavorites?: (book: any) => void, 
    removeBookFromCart?: (book: any) => void, 
    removeBookFromFavorite?: (book: any) => void, 
    itemCount?: any
}

export type TData = {
    "error"?: string,
    "title": string,
    "subtitle"?: string,
    "authors"?: string,
    "publisher"?: string,
    "isbn10"?: string,
    "isbn13": number,
    "pages"?: string, 
    "year"?: string, 
    "rating"?: string, 
    "desc"?: string, 
    "price": string, 
    "image": string, 
    "url"?: string
}

export type TContext = [
    string, 
    (value: string) => void 
]