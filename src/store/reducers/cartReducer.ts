import { CartState, Book } from '../types';
import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART } from '../actions/cartActions';

const initialState: CartState = {
    cart: []
};

export default function cartReducer(state: CartState = initialState, action: any): CartState {
    switch (action.type) {
        case ADD_BOOK_TO_CART:
            const alreadyOnCart = state.cart.some((book: Book) => book.id === action.book.id);
            if (!alreadyOnCart) {
                return {
                    ...state,
                    cart: [...state.cart, action.book]
                };
            }
            return state;
        case REMOVE_BOOK_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((book: Book) => book.id !== action.id)
            };
        default:
            return state;
    }
}
