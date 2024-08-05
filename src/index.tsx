import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>aaaaaaaa errorrr!</h1>,
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
        path: '/posts',
        element: <PostPage />,
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
