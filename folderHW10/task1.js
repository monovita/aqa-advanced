import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Norse Mythology", "Neil Gaiman", 2017);
const book2 = new Book("The Little Book of Hygge", "Greg McKeown", 2016);

book1.printInfo(); 
book2.printInfo();

const ebook1 = new EBook("The Thirteenth Tale", "Diane Setterfield", 2006, "epub");

ebook1.printInfo();

const ebook2 = new EBook("The Plague", "Albert Camus", 1947, "pdf");

ebook2.title = -300; 
ebook2.author = 32;
ebook2.published = "test";
ebook2.format = null;
 
ebook2.printInfo();


console.log("The oldest book:")
const booksArray = [book1, book2, ebook1, ebook2];

Book.returnOldestBook(booksArray);

console.log("The converted book:")

EBook.convertBookToEbook(book1);