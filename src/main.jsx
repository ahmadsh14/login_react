import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserPost from './UserPost/UserPost'
import PostComment from './UserPost/PostComment'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([{ path: '/', element: <App /> }, { path: '/Posts', element: <UserPost /> }, { path: '/PostComment', element: <PostComment /> }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
