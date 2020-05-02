import { BookState, Book, BookAction } from '../types';
import {
    FETCHING_BOOKS,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    SEARCHING_BOOK,
    FETCH_BOOK_DETAILS
} from '../actions/booksActions';

const initialState: BookState = {
    books: [],
    original: [],
    details: [],
    loading: false,
    error: null
};

export default function booksReducer(
    state: BookState = initialState,
    action: BookAction
): BookState {
    switch (action.type) {
        case FETCHING_BOOKS:
            return {
                ...state,
                loading: action.loading
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.books,
                original: action.books,
                loading: false
            };
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case FETCH_BOOK_DETAILS:
            return {
                ...state,
                details: state.books.filter((book: Book) => book.id === action.id)
            };
        case SEARCHING_BOOK:
            if (action.title !== '') {
                return {
                    ...state,
                    books: state.books.filter((book: Book) =>
                        book.title.toLowerCase().includes(action.title)
                    )
                };
            }
            return {
                ...state,
                books: state.original
            };
        default:
            return state;
    }
}
