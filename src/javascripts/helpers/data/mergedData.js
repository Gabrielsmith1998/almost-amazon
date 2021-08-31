import { getSingleAuthor } from './authorData';
import { getAuthorBooks, getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorFirebaseKey)
    .then((authorObj) => {
      getAuthorBooks(authorObj.firebaseKey)
        .then((bookObj) => {
          console.warn(bookObj);
          console.warn(authorObj);
          resolve({ books: bookObj, ...authorObj });
        });
    }).catch(reject);
});

export { viewBookDetails, viewAuthorDetails };
