const bookshelf = document.getElementById('bookshelf');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('btn');
let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

class Libro {
  constructor(title, author) {
    this.dataBooks = [title, author];
    this.title = title;
    this.author = author;
  }

  deleteBook = (index) => {
    dataBooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }

  addBook = (libro) => {
    dataBooks.push(libro);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }
}

<<<<<<< HEAD
const printList = () => {
  const libro = new Libro();
  bookshelf.innerHTML = null;
  if (localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('book')) || [];
  }
  for (let i = 0; i < dataBooks.length; i += 1) {
    const bookStorage = document.createElement('div');
    const bookInfo = document.createElement('p');
    const deleteBtn = document.createElement('button');
    bookInfo.textContent = `"${dataBooks[i].title}" by ${dataBooks[i].author}`;
    deleteBtn.textContent = 'Remove';
    bookshelf.appendChild(bookStorage);
    bookStorage.append(bookInfo, deleteBtn);
    bookStorage.className = 'bookStorage';
    deleteBtn.addEventListener('click', () => {
      bookStorage.remove();
      libro.deleteBook(i);
    });
  }
};

printList();

addBtn.addEventListener('click', () => {
  const libro = new Libro(title.value, author.value);
  libro.addBook(libro);
});
=======
const abb = document.querySelector('#nas');
abb.addEventListener('click', () => {
  new Library().newBook();
});
localStorage.setItem(JSON.stringify({ MyLibrary: myLibrary }));
>>>>>>> 7da64e51875adfe4b709697ef7f3909eb9f9a503
