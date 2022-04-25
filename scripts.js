let myLibrary=[];
let newId = 1;

function addBook(id, title,author) {
    const book= {
        id, title, author
    }
    myLibrary.push(book)
    return book;
}

function newBook() {
   const title= document.getElementById('title');
   const author= document.getElementById('author');
   const book= addBook(newId++, title.value, author.value);
   addBookToShelf(book);
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id != id);
    return myLibrary;
}

function removeBookwin(event) {
    const btn = event.target;
    const value = btn.value;
    removeBook(value);
    btn.parentElement.remove();
}

function addBookToShelf(book) {
    const bookShelf= document.getElementById('bookShelf');
    bookShelf.setAttribute("style", "display:flex; flex-direction: column; margin-left: 43%;");
    const bookdiv = document.createElement('div');
    const bookcard = document.createElement('div');
    bookcard.setAttribute("style", "text-align:center; width: 200px; display:flex; flex-direction: column; gap: 10px;");
    bookcard.textContent = book.title+ " by " + book.author;
    const removebtn = document.createElement('button');
    removebtn.textContent = "remove";
    removebtn.value = book.id;
    removebtn.onclick = removeBookwin;
    bookdiv.appendChild(bookcard);
    bookcard.appendChild(removebtn);
    bookShelf.appendChild(bookcard);
}


