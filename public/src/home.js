const getTotalBooksCount = books => books.length;

const getTotalAccountsCount = accounts => accounts.length;

function getBooksBorrowedCount(books) {
  let borrowCount = books.filter((book) =>
  book.borrows.filter((record) => record.returned === false).length > 0
  );
  return borrowCount.length;
}

function getMostCommonGenres(books) {
  let commonGenres = {};
  books.forEach((number) => {
    if (commonGenres[number.genre]) {
      commonGenres[number.genre]++; 
    } else {
      commonGenres[number.genre] = 1;
    }
  });
  return Object.entries(commonGenres).map(([name, count]) => {
    return {
      name,
      count
    };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let auth = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        auth.count += book.borrows.length;
      }
    });
    result.push(auth);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
