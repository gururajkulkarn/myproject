import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import NewsA from './News'
import YouTube from './Youtube'
import ImagesApi from './ImagesApi'
import Motivation from './Motivation'
import Blogs from './Blogs'
import Weather from './Weather'
import Mywebsites from './Mywebsites'
const NavRouter = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        <Route exact path="/news" element={<NewsA/>}/>
        <Route exact path="/youtube" element={<YouTube/>}/>
        <Route exact path="/pics" element={<ImagesApi/>}/>
        <Route exact path="/weather" element={<Weather/>}/>
        <Route exact path="/motivation" element={<Motivation/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/mywebsite" element={<Mywebsites/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default NavRouter
