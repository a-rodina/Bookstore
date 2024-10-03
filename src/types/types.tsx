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
}

export type TData = {
    "error"?: string,
    "title": string,
    "subtitle"?: string,
    "authors"?: string,
    "publisher"?: string,
    "isbn10"?: string,
    "isbn13": string,
    "pages"?: string, 
    "year"?: string, 
    "rating"?: string, 
    "desc"?: string, 
    "price": string, 
    "image": string, 
    "url"?: string
}
