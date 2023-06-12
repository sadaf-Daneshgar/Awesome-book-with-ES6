export default class Book {
  constructor(formElem, bookCollectionName, elemToInsertData) {
    this.bookCollectionName = bookCollectionName;
    this.elemToInsertData = elemToInsertData;
    this.formElem = document.querySelector(formElem);
    this.bookCollection = JSON.parse(localStorage.getItem(this.bookCollectionName)) || [];
    this.bookTitleField = document.querySelector('.book-title');
    this.bookAuthorField = document.querySelector('.book-author');
    this.formEventHandler();
    this.displayBooks();
  }

  updateLocalStorageData() {
    // This method will update data in localStorage
    localStorage.setItem(this.bookCollectionName, JSON.stringify(this.bookCollection));
  }

  addBookToList(title, author) {
    // This method will add a new book into the booklist
    this.bookCollection.push({ title, author });
    this.updateLocalStorageData();
    this.displayBooks();
  }

  removeBookFromList(index) {
    // This method will remove the selected book from the booklist
    this.bookCollection.splice(index, 1);
    this.updateLocalStorageData();
    this.displayBooks();
  }

  generateHtmlForBookList() {
    // This method will generate HTML element for the complete booklist
    let boilerPlate = '';
    this.bookCollection.forEach((book, index) => {
      boilerPlate += `<tr class="book-item">
          <td>"${book.title}" by ${book.author}</td>
          <td>
            <button class="btn btn-light" data-index=${index}>
              Remove
            </button>
          </td>
        </tr>`;
    });
    return boilerPlate;
  }

  activateRemoveButton() {
    // This method will add & activate remove event on remove button in each book row
    const table = document.querySelector('.booklist-table');
    const btn = table.querySelectorAll('button');
    btn.forEach((btnR, index) => {
      btnR.addEventListener('click', () => {
        this.removeBookFromList(index);
      });
    });
  }

  displayBooks() {
    // This method will generate the complete booklist and display it
    const bookList = document.querySelector(this.elemToInsertData);
    bookList.innerHTML = this.generateHtmlForBookList();
    this.activateRemoveButton();
    this.formInputFieldNormalize();
  }

  formInputFieldNormalize() {
    // This method will normalize the form input fields
    this.bookTitleField.value = '';
    this.bookAuthorField.value = '';
  }

  formEventHandler() {
    // This method will handle the form event
    this.formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addBookToList(this.bookTitleField.value, this.bookAuthorField.value);
      this.formInputFieldNormalize();
    });

    this.bookTitleField = this.formElem.querySelector('.book-title');
    this.bookAuthorField = this.formElem.querySelector('.book-author');
  }
}
