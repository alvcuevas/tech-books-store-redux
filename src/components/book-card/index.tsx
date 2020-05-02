import React from 'react';
import { Book } from '../../store/types';
import { Store } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { addBookToCart, removeBookFromCart } from '../../store/actions/cartActions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RemoveShoppingCartRoundedIcon from '@material-ui/icons/RemoveShoppingCartRounded';

import './index.scss';

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    const dispatch = useDispatch();
    const { cart } = useSelector((store: Store) => store.cart);
    const onCart = cart.some((b: Book) => b.id === book.id);

    return (
        <div className="book">
            <div className="img">
                <img alt={book.title} src={book.img} />
            </div>
            <div className="content">
                <div className="title">{book.title}</div>
                <div className="desc">{book.description}</div>
                <div className="actions">
                    {book.price} €
                    {onCart ? (
                        <RemoveShoppingCartRoundedIcon
                            color="secondary"
                            onClick={() => dispatch(removeBookFromCart(book.id))}
                        />
                    ) : (
                        <ShoppingCartOutlinedIcon onClick={() => dispatch(addBookToCart(book))} />
                    )}
                </div>
            </div>
        </div>
    );
}
