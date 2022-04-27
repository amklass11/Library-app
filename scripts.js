const myLibrary = [];
let newId = 1;

class Library {
    constructor() {
        this.myLibrary = [];
      }
  addBook(id, title, author) {
    this.id = id;
    const book = {
      id, title, author,
    };
    myLibrary.push(book);
    return book;
  }

  removeBook(id) {
    this.myLibrary = myLibrary.filter((book) => book.id !== id);
    return myLibrary;
  }

  removeBookwin(event) {
    const btn = event.target;
    const { value } = btn;
    removeBook(value);
    btn.parentElement.remove();
  }

  addBookToShelf(book) {
    const bookShelf = document.getElementById('bookShelf');
    bookShelf.setAttribute('style', 'display:flex; flex-direction: column; margin-left: 43%;');
    const bookdiv = document.createElement('div');
    const bookcard = document.createElement('div');
    bookcard.setAttribute('style', 'text-align:center; width: 200px; display:flex; flex-direction: column; gap: 10px;');
    bookcard.textContent = `${book.title} by ${book.author}`;
    const removebtn = document.createElement('button');
    removebtn.textContent = 'remove';
    removebtn.value = book.id;
    removebtn.onclick = this.removeBookwin;
    bookdiv.appendChild(bookcard);
    bookcard.appendChild(removebtn);
    bookShelf.appendChild(bookcard);
  }

  newBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    newId += newId + 1;
    const book = this.addBook(newId, title.value, author.value);
    this.addBookToShelf(book);
  }
}

const abb = document.querySelector('#nas');
abb.addEventListener('click', () => {
  new Library().newBook();
});
localStorage.setItem(JSON.stringify({ MyLibrary: myLibrary }));
