import React from 'react'
import moment from 'moment/moment'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts(props) {
  const {onChange} = props;
  const [content, setContent] = useState([])

  const goToSinglePost = (e) =>{
    onChange(e.target.id)
  }

  
  const getPosts =  () => {
    fetch('http://localhost:7777/posts')
    .then(data =>{
      return data.json()
    })
    .then(data =>{
      setContent([...data])
    })
  };
  
  getPosts()

 const contentRender = content.map((element)=>{
  const to = `/posts/${element.id}`;
  return (
    <Link onClick={goToSinglePost} key={element.id} className='cardLink'  to={to} >
    <div id={element.id} className="card">
      <div id={element.id} className="cardHeader">
        <div id={element.id} className="avatar"><img src="https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png" alt="" /></div>
        <div id={element.id} className="headerInfo">
          <div id={element.id} className="UserName">Some User</div>
          <div id={element.id} className="status">Some Status - {moment(new Date(element.created), "YYYYMMDD").fromNow()}</div>
        </div>
      </div>
      <div id={element.id} className="cardContent">{element.content}</div>
      
      <div id={element.id} className="buttons">
        <div id={element.id} className="postButton like">Like</div>
        <div id={element.id} className="postButton comment">comment</div>
      </div>
      <div id={element.id} className="footerCard">
        <div id={element.id} className="avatar"><img src="https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png" alt="" /></div>
        <div id={element.id} className="inputarea">
          <input id={element.id} type="text" />
          <div id={element.id} className="sendButton">Send</div>
        </div>
      </div>
    </div>
    </Link>
  )

 })

  return (
    <div>
      {contentRender}
    </div>
  )
}
