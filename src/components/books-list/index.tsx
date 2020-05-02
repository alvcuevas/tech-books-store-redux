import React from 'react';
import BookCard from '../book-card';
import { Book } from '../../store/types';

import './index.scss';

interface BooksListProps {
    books: Book[];
}

const BooksList = ({ books }: BooksListProps) => (
    <div className="books-list">
        {books.map((book: Book) => (
            <BookCard key={book.id} book={book} />
        ))}
    </div>
);

export default BooksList;
