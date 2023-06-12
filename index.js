import Book from './modules/addbook.js';
import * as Navigation from './modules/navigation.js';

const bookList = new Book('#book-form', 'bookCollection', '.booklist-table');
Navigation.toggleElement('target');
Navigation.toggleNav('targetNav');
Navigation.attachEventListeners();
