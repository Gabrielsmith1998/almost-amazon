import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import {
  createBook,
  deleteBook,
  getSingleBook,
  updateBook,
} from '../helpers/data/bookData';
import addAuthorForm from '../components/forms/addAuthorsForm';
import {
  createAuthor,
  deleteAuthor,
  updateAuthor,
  getSingleAuthor,
} from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import { viewAuthorDetails, viewBookDetails } from '../helpers/data/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');
        console.warn(id);
        deleteBook(id).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        author_id: document.querySelector('#author_id').value,
        image: document.querySelector('#image').value,
        price: Number(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value
      };
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    if (e.target.id.includes('view-book-btn')) {
      const [, id] = e.target.id.split('--');
      viewBookDetails(id).then(viewBook);
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const bookObject = {
        author_id: document.querySelector('#author_id').value,
        image: document.querySelector('#image').value,
        price: Number(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value,
        firebaseKey: id
      };

      updateBook(bookObject).then(showBooks);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteAuthor(id).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorObject = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value
      };
      createAuthor(authorObject).then((authorArray) => showAuthors(authorArray));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const authorObject = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        quote: document.querySelector('#quote').value,
        firebaseKey: id
      };
      updateAuthor(authorObject).then(showAuthors);
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewAuthorDetails(firebaseKey).then(viewAuthor);
    }

    if (e.target.id.includes('edit-author-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleAuthor(id).then((authorObj) => addAuthorForm(authorObj));
    }
  });
};

export default domEvents;
