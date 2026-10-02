// Load books from localStorage
let books = JSON.parse(localStorage.getItem("books")) || [
  { title: "Dune", author: "Frank Herbert", pages: 412, read: false },
  { title: "1984", author: "George Orwell", pages: 328, read: true },
  { title: "Circe", author: "Madeline Miller", pages: 385, read: false },
];

// DOM elements
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

function renderBooks() {
  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = book.read;

    checkbox.addEventListener("change", () => {
      book.read = checkbox.checked;
      saveBooks();
      renderBooks();
    });

    const text = document.createElement("span");
    text.textContent = `${book.title} by ${book.author} (${book.pages} pages)`;

    if (book.read) {
      text.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      books = books.filter((b) => b !== book);
      saveBooks();
      renderBooks();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    bookList.appendChild(li);
  });
}

addBookBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();

  if (!title || !author || !pages) return;

  books.push({
    title,
    author,
    pages: Number(pages),
    read: false,
  });

  saveBooks();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";

  renderBooks();
});

renderBooks();