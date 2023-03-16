import React from 'react'
import { Link } from 'react-router-dom'



export default function NewPost() {


  const createPost = (e)=>{
    const value = document.querySelector('.new-post-text').value;
    if (value.length>0){
      const data ={
        "id": 0, 
        "content": value}
      
      fetch('http://localhost:7777/posts',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
  }

  return (
    <>
      <div className='upBar'>
        <Link className='Publication NPB'>Публикация</Link> 
        <Link className='Photo NPB'>Фото/Видео</Link>
        <Link className='Live NPB'>Прямой эфир</Link>
        <Link className='More NPB'>Еще</Link>
        <Link className='Clos-New-Post' to='/'>X</Link>
      </div>
      <div className="new-post-value">
        <textarea className='new-post-text'></textarea>
      </div>
      <div className="addbutton">
        <Link onClick={createPost} className='AddButton' to='/'>Опубликовать</Link>
      </div>
    </>

  )
}
