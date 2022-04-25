let myLibrary=[];


function AddBook(title,author) {
    this.title=title;
    this.author=author;

    let book = new Book(title,author);
    myLibrary.push(book);
}
 

