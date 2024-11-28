import { createSlice } from '@reduxjs/toolkit';
import { Books } from '../utils/mockdata';

const initialState = {
  books: Books,
  filteredBooks: Books,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterBooks(state, action) {
      const { filterTerm } = action.payload;
      if (filterTerm.trim() === '') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(
          (book) =>
            book.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(filterTerm.toLowerCase()) ||
            book.genre.toLowerCase().includes(filterTerm.toLowerCase())
        );
      }
    },
    addBook(state, action) {
      const newBook = {
      ...action.payload,
      id: state.books.length + 1,
      };
      state.books.push(newBook);
      state.filteredBooks.push(newBook);
    },
    resetBooks(state) {
      state.filteredBooks = state.books;
    },
  },
});
export const { filterBooks, addBook, resetBooks } = bookSlice.actions;
export default bookSlice.reducer;
