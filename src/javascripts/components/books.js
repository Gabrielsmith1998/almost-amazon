import clearDom from '../helpers/auth/clearDom';

const showBooks = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <h8 class="card-title">${item.description || ''}</h8>
        <p class="card-text bold">${item.sale ? `<span class="badge bg-info"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
        <button class="btn btn-info" id="edit-book-btn--${item.firebaseKey}">Edit Book</button>
        <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete Book</button>
        </div>
      </div>`;
  });
};

const emptyBooks = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showBooks, emptyBooks };
