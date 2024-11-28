import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import BrowseBooks from './components/BrowseBooks'; 
import NotFound from './components/NotFound';

const appRouter = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },  
      { path: '/book/:id', element: <BookDetails /> }, 
      { path: '/add', element: <AddBook /> }, 
      { path: '/browse', element: <BrowseBooks /> },  
      { path: '/books/:category', element: <BrowseBooks /> },  
    ],
    errorElement: <NotFound />, 
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
