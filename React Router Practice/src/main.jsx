import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import AboutUs from './components/about/AboutUs.jsx'
import User from './components/user/User.jsx'
import Github,{fetchData} from './components/github/Github.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<AboutUs/>} />
      <Route path='contact' element={<ContactUs/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route loader={fetchData} path='github' element={<Github/>} />      

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
