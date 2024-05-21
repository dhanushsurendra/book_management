import BookItem from './BookItem/BookItem'

import classes from './BookItems.module.css'

const books = () => {
	const books = [
		{
			title: 'To Kill a Mockingbird',
			author: 'Harper Lee',
			genre: 'Fiction',
			year_published: 1960
		},
		{
			title: '1984',
			author: 'George Orwell',
			genre: 'Science Fiction',
			year_published: 1949
		},
		{
			title: 'Pride and Prejudice',
			author: 'Jane Austen',
			genre: 'Romance',
			year_published: 1813
		},
		{
			title: 'The Catcher in the Rye',
			author: 'J.D. Salinger',
			genre: 'Fiction',
			year_published: 1951
		},
		{
			title: 'The Great Gatsby',
			author: 'F. Scott Fitzgerald',
			genre: 'Fiction',
			year_published: 1925
		},
		{
			title: 'To Kill a Mockingbird',
			author: 'Harper Lee',
			genre: 'Fiction',
			year_published: 1960
		},
		{
			title: 'Moby-Dick',
			author: 'Herman Melville',
			genre: 'Adventure',
			year_published: 1851
		},
		{
			title: 'War and Peace',
			author: 'Leo Tolstoy',
			genre: 'Historical Fiction',
			year_published: 1869
		},
		{
			title: 'The Hobbit',
			author: 'J.R.R. Tolkien',
			genre: 'Fantasy',
			year_published: 1937
		},
		{
			title: 'Frankenstein',
			author: 'Mary Shelley',
			genre: 'Gothic Fiction',
			year_published: 1818
		},
		{
			title: 'The Lord of the Rings',
			author: 'J.R.R. Tolkien',
			genre: 'Fantasy',
			year_published: 1954
		},
		{
			title: 'The Odyssey',
			author: 'Homer',
			genre: 'Epic Poetry',
			year_published: -800
		},
		{
			title: 'The Adventures of Huckleberry Finn',
			author: 'Mark Twain',
			genre: 'Adventure',
			year_published: 1884
		},
		{
			title: "Alice's Adventures in Wonderland",
			author: 'Lewis Carroll',
			genre: 'Fantasy',
			year_published: 1865
		},
		{
			title: 'The Picture of Dorian Gray',
			author: 'Oscar Wilde',
			genre: 'Gothic Fiction',
			year_published: 1890
		},
		{
			title: 'The Divine Comedy',
			author: 'Dante Alighieri',
			genre: 'Epic Poetry',
			year_published: 1472
		},
		{
			title: 'The Brothers Karamazov',
			author: 'Fyodor Dostoevsky',
			genre: 'Philosophical Fiction',
			year_published: 1880
		},
		{
			title: 'One Hundred Years of Solitude',
			author: 'Gabriel Garcia Marquez',
			genre: 'Magical Realism',
			year_published: 1967
		},
		{
			title: 'Crime and Punishment',
			author: 'Fyodor Dostoevsky',
			genre: 'Psychological Fiction',
			year_published: 1866
		},
		{
			title: 'Brave New World',
			author: 'Aldous Huxley',
			genre: 'Science Fiction',
			year_published: 1932
		},
		{
			title: 'The Count of Monte Cristo',
			author: 'Alexandre Dumas',
			genre: 'Adventure',
			year_published: 1844
		},
		{
			title: 'Gone with the Wind',
			author: 'Margaret Mitchell',
			genre: 'Historical Fiction',
			year_published: 1936
		},
		{
			title: 'Don Quixote',
			author: 'Miguel de Cervantes',
			genre: 'Adventure',
			year_published: 1605
		},
		{
			title: 'Wuthering Heights',
			author: 'Emily Brontë',
			genre: 'Gothic Fiction',
			year_published: 1847
		},
		{
			title: 'The Scarlet Letter',
			author: 'Nathaniel Hawthorne',
			genre: 'Historical Fiction',
			year_published: 1850
		},
		{
			title: 'A Tale of Two Cities',
			author: 'Charles Dickens',
			genre: 'Historical Fiction',
			year_published: 1859
		},
		{
			title: 'The Grapes of Wrath',
			author: 'John Steinbeck',
			genre: 'Fiction',
			year_published: 1939
		},
		{
			title: 'The Canterbury Tales',
			author: 'Geoffrey Chaucer',
			genre: 'Poetry',
			year_published: 1387
		},
		{
			title: 'The Iliad',
			author: 'Homer',
			genre: 'Epic Poetry',
			year_published: -750
		},
		{
			title: 'Les Misérables',
			author: 'Victor Hugo',
			genre: 'Historical Fiction',
			year_published: 1862
		},
		{
			title: 'The Sun Also Rises',
			author: 'Ernest Hemingway',
			genre: 'Fiction',
			year_published: 1926
		}
	]

	return (
		<div className={classes.books}>
			{books.map(book => <BookItem key={book.title} book={book} />)}
		</div>
	)
}

export default books
