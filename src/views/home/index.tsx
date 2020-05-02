import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../store/actions/booksActions';
import BooksList from '../../components/books-list';
import { Store } from '../../store';

const HomeView = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((store: Store) => store.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return (
        <>
            {loading && 'Loading books...'}
            {!loading && books.length > 0 && <BooksList books={books} />}
            {error && 'Error fetching books'}
        </>
    );
};

export default HomeView;
