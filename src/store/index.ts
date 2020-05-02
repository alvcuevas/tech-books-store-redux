import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import booksReducer from '../store/reducers/booksReducer';
import cartReducer from '../store/reducers/cartReducer';
import { AppActions } from './types';

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer
});

export type Store = ReturnType<typeof rootReducer>;

const enhancer = composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<Store, AppActions>));
export const configureStore = () => createStore(rootReducer, enhancer);
