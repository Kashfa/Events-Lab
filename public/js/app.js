const handleFormSubmit = function (event) {
  event.preventDefault();
  const inputTitle = this.title.value;
  const inputAuthor = this.author.value;
  // const categorySelect = this.category.value;

  let options = document.getElementsByName('category');
  let categorySelect = 0;
  for(let i = 0; i < options.length; i++) {
    if(options[i].checked) {
      categorySelect = options[i].value;
    }
  }

  const bookDetails = document.querySelector('#book-list')
  // bookDetails.textContent = `Title: ${inputTitle}\n Author: ${inputAuthor}`;
  addBook(inputTitle, inputAuthor, categorySelect, bookDetails);
  console.dir(categorySelect);


}

const addBook = function (title, author, category, container) {
let bookListItem = document.createElement('li');
bookListItem.textContent = `Title: ${title} Author: ${author} Category: ${category}`;
container.appendChild(bookListItem);

}



document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);

});
