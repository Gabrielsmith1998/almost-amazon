import clearDom from '../../helpers/auth/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="first_name" placeholder="Enter First Name" value="${obj.first_name || ''}"required>
        </div>
        <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control" id="last_name" aria-describedby="last_name" placeholder="Enter Last Name" value="${obj.last_name || ''}" required>
      </div>
        <div class="form-group">
        <label for="email">Email</label>
        <input required type="url" class="form-control" id="email" placeholder="Email" value="${obj.email || ''}" required>
      </div>
      <div class="form-group">
      <label for="quote">Quote</label>
      <textarea class="form-control" placeholder="Author quote" id="quote" style="height: 100px">${obj.quote || ''}</textarea>
    </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
      </form>`;
};
export default addAuthorForm;
