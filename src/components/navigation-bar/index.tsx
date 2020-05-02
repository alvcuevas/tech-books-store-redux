import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { searchBook } from '../../store/actions/booksActions';
import { Link } from 'react-router-dom';
import { Store } from '../../store';

import './index.scss';

export default function NavigationBar() {
    const { cart } = useSelector((store: Store) => store.cart);
    const dispatch = useDispatch();

    const handleChange = (title: string) => {
        dispatch(searchBook(title));
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h3 className="title">Tech-Books Redux Store</h3>
                    </Link>
                </li>
                <li>
                    <input
                        type="text"
                        placeholder="Search a book..."
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange(e.target.value)
                        }
                    />
                </li>
                <li>
                    <IconButton color="inherit">
                        <Badge badgeContent={cart.length} color="secondary">
                            <Link to="/cart">
                                <ShoppingCart />
                            </Link>
                        </Badge>
                    </IconButton>
                </li>
            </ul>
        </nav>
    );
}
