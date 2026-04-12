export class Book {
  constructor(title, author, published) {
    this.title = title;
    this.author = author;
    this.published = published;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      console.log("Title should be a string");
      return;
    }
    this._title = value;
  } 

  get author() {
    return this._author;
  } 

  set author(value) {
      if (typeof value !== 'string') {
        console.log("Author should be a string");
        return;
      }
      this._author = value;
    }  

  get published() {
    return this._published;
  }   

  set published(value) {
      if (typeof value !== 'number') {
        console.log("Published should be a number");
        return;
      }
      this._published = value;
    }   

  printInfo() {
    console.log(`Book "${this.title}" by ${this.author} was published in ${this.published}`);
  }

static returnOldestBook(booksArray) {
    const oldestBook = booksArray.reduce((oldest, current) => {
    return current.published < oldest.published ? current : oldest;
  });
    return oldestBook.printInfo();
}

}

