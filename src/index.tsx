import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import UserPage from './pages/user/UserPage'
import PostPage from './pages/post/PostPage'
import CommentsPage from './pages/comment/CommentsPage'
import UserDetailsPage from './pages/user/UserDetailsPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>Error!</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/users',
        element: <UserPage />,
      },
      {
        path: '/users/:userId/posts',
        element: <UserDetailsPage />,
      },
      {
        path: '/posts',
        element: <PostPage />,
      },
      {
        path: '/comments',
        element: <CommentsPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
