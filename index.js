import Book from './modules/addbook.js';
import * as Navigation from './modules/navigation.js';
import setDateTime from './modules/data&time.js';
setDateTime();

// eslint-disable-next-line no-unused-vars
const bookList = new Book('#book-form', 'bookCollection', '.booklist-table');
Navigation.toggleElement('target');
Navigation.toggleNav('targetNav');
Navigation.attachEventListeners();


