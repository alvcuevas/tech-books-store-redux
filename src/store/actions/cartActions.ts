import { Book, CartAction } from '../types';

export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';

export const addBookToCart = (book: Book): CartAction => ({
    type: ADD_BOOK_TO_CART,
    book
});

export const removeBookFromCart = (id: number): CartAction => ({
    type: REMOVE_BOOK_FROM_CART,
    id
});
