const findAuthorById = (authors, id) => authors.find((author) => author.id === id);

const findBookById = (books, id) => books.find((book) => book.id === id);

function partitionBooksByBorrowedStatus(books) {
  const returnedBook = books.filter((book) => book.borrows[0].returned);
  const checkedOutBook = books.filter((book) => !book.borrows[0].returned);
  return [checkedOutBook, returnedBook];
};

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  })
  .slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
