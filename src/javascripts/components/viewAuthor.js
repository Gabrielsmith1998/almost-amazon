import clearDom from '../helpers/auth/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-authors--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
     <h2>${obj.first_name} ${obj.last_name} </h2>
       <p>${obj.email || ''}</p>
       <hr>  
       <h2>Author Books:</h2>
        </div>
      </div>`;

  obj.books.forEach((object) => {
    document.querySelector('#author-books').innerHTML += `
    <div class="card">
      <div>
          <img src=${object.image} alt=${object.title} style="width: 300px;">
          <hr>
          <h2>${object.title}</h2>
          <p>${object.description || 'Please add a description for this book.'}</p>
        </div>
    </div>
    `;
  });
};
export default viewAuthor;
