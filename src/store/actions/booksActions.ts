import { Book, BookAction } from '../types';
import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCHING_BOOKS = 'FETCHING_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const FETCH_BOOK_DETAILS = 'FETCH_BOOK_DETAILS';
export const SEARCHING_BOOK = 'SEARCHING_BOOK';

export const fetchBooks = () => (dispatch: Dispatch<BookAction>): any => {
    dispatch(fetchingBooks(true));
    axios
        .get('http://localhost:3001/books')
        .then(res => {
            if (res.data) {
                dispatch(fetchBooksSuccess(res.data));
                dispatch(fetchingBooks(false));
            }
        })
        .catch(err => dispatch(fetchBooksError(err)));
};

export const fetchingBooks = (loading: boolean): BookAction => ({
    type: FETCHING_BOOKS,
    loading
});

export const fetchBooksSuccess = (books: Book[]): BookAction => ({
    type: FETCH_BOOKS_SUCCESS,
    books
});

export const fetchBooksError = (error: any): BookAction => ({
    type: FETCH_BOOKS_ERROR,
    error
});

export const fetchBookDetails = (id: number): BookAction => ({
    type: FETCH_BOOK_DETAILS,
    id
});

export const searchBook = (title: string): BookAction => ({
    type: SEARCHING_BOOK,
    title
});
