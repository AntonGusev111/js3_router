import React from 'react';



import { Routes, Route } from "react-router-dom";
import MainPage from '../Components/MainPage';
import NewPost from '../Components/NewPost';
import SinglePost from '../Components/SinglePost';


export default function ProjectRouters(postId) {



  return (
    <div>
       <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path='/posts/:postId' element={<SinglePost />} />

        </Routes>
    </div>
  )
}
