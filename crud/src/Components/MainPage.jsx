import React from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';
import SinglePost from './SinglePost';


export default function MainPage() {

  
  return (
    <>
      <div className='CreateBar'>
        <div className="CreateButton">
          <Link className='CreateButton' to="/posts/new">Создать пост</Link>
        </div>
      </div>
      <Posts />
    </>
    
  )
}
