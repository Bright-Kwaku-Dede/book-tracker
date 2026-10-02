let books = [
  { title: "Dune", author: "Frank Herbert", pages: 412, read: false },
  { title: "1984", author: "George Orwell", pages: 328, read: true },
  { title: "Circe", author: "Madeline Miller", pages: 385, read: false },
];

const titles = books.map((book) => book.title);

const longBooks = books.filter((book) => book.pages > 350);

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

function longestBook(books) {
  let longest = books[0];

  for (let i = 1; i < books.length; i++) {
    if (books[i].pages > longest.pages) {
      longest = books[i];
    }
  }
  return longest.title;
}

console.log(titles);

console.log(longBooks);

console.log(totalPages);

console.log(longestBook(books));
