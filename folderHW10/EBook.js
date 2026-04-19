import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, published, format) {
		super(title, author, published);
		this.format = format;
	}

	get format() {
		return this._format;
	}

	set format(value) {
		if (typeof value !== 'string') {
			console.log('Format should be a string');
			return;
		}
		this._format = value;
	}

	printInfo() {
		console.log(`E-Book "${this.title}" by ${this.author} was published in ${this.published}, format: ${this.format}`);
	}

	static convertBookToEbook(book1, format = '****') {
		const convertedBook = new EBook(book1.title, book1.author, book1.published, format);
		return convertedBook.printInfo();
	}
}
