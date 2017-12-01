// console.log('A book has been selected:', book.title);
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}