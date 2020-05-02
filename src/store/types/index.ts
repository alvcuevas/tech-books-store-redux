import {
    FETCHING_BOOKS,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    FETCH_BOOK_DETAILS,
    SEARCHING_BOOK
} from '../actions/booksActions';
import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from '../actions/cartActions';

export type CartState = {
    cart: Book[];
};

export type BookState = {
    books: Book[];
    original: Book[];
    details: Book[];
    loading: boolean;
    error: any;
};

export type Book = {
    id: number;
    title: string;
    description: string;
    price: number;
    img: string;
};

type FetchingBooksAction = {
    type: typeof FETCHING_BOOKS;
    loading: boolean;
};

type FetchBooksSuccess = {
    type: typeof FETCH_BOOKS_SUCCESS;
    books: Book[];
};

type FetchBooksError = {
    type: typeof FETCH_BOOKS_ERROR;
    error: any;
};

type FetchBookDetails = {
    type: typeof FETCH_BOOK_DETAILS;
    id: number;
};

type SearchBook = {
    type: typeof SEARCHING_BOOK;
    title: string;
};

type AddBookToCartAction = {
    type: typeof ADD_BOOK_TO_CART;
    book: Book;
};

type RemoveBookFromCartAction = {
    type: typeof REMOVE_BOOK_FROM_CART;
    id: number;
};

export type BookAction =
    | FetchingBooksAction
    | FetchBooksSuccess
    | FetchBooksError
    | FetchBookDetails
    | SearchBook;

export type CartAction = AddBookToCartAction | RemoveBookFromCartAction;
export type AppActions = BookAction | CartAction;
