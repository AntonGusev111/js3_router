import React from 'react';

import { Routes, Route } from "react-router-dom";
import MainPage from '../Components/MainPage';
import NewPost from '../Components/NewPost';
import Posts from '../Components/Posts';
import SinglePost from '../Components/SinglePost';


export default function ProjectRouters(postId) {

  const onePostUrl=`/posts/1` //${postId}



  return (
    <div>
       <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path={onePostUrl} element={<SinglePost />} />
        </Routes>
    </div>
  )
}
