import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';



export default function SinglePost() {
  const [content, setContent] = useState([])
  const [redact, setRedact] = useState(false)
  const param = useParams();

  const getPosts =  () => {
    fetch('http://localhost:7777/posts')
    .then(data =>{
      return data.json()
    })
    .then(data =>{
      setContent([...data])
    })
  };

  const handleDellPost=()=>{
    
    
    fetch('http://localhost:7777/posts/'+param.postId,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };

  const handleChange =() =>{
    setRedact(true)
  };

  const handleSaveChange =()=>{
    const input = document.querySelector('input').value;
    const data = {
      "id":param.postId,
      "content":input
    };
    fetch('http://localhost:7777/posts',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setRedact(false);

  }

  const handleCancelChange = ()=>{
    setRedact(false);
  }

  useEffect(getPosts,[content]);


  const renderContent = content.map((element)=>{
    if(element.id == Number(param.postId)){

      return(
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
        
        <div onClick={handleChange} className="changeBTN">Изменить</div>
        <Link className="dellBTN" to="/"> <div onClick={handleDellPost}>Удалить</div></Link>
      </div>
    </div>
      )
    }
  });

  const changeContent = content.map((element)=>{
    if(element.id == Number(param.postId)){
      return(
        <div id={element.id} className="card">
          <div className="changeHeader">
            <div className="name">Редактировать публикацию</div>
            <div onClick={handleCancelChange} className="cancelChange">X</div>
          </div>
          <div id={element.id} className="ChangeInfo">
          <div id={element.id} className="avatar"><img src="https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png" alt="" /></div>
          <input type="text" defaultValue={element.content} className="redact" />
          </div>
          <div className="buttons">
            <div className="leftblock">
              <div className="photo">Фото/видео</div>
              <div className="actions">Чувства/действия</div>
              <div className="gif">GIF</div>
            </div>
           <div className="rightblock">
           <div className="friends">Отметить друзей</div>
            <div className="geodot">Отметить посещение</div>
           </div>
          </div>
          <div onClick={handleSaveChange} className="savebtn">Сохранить</div>
        </div>
      )
    }
  })

if(redact){
  return(
    <div>
      {changeContent}
    </div>
  )
}else{
  return (
    <div>
      {renderContent}
    </div>
  )
}

  
}
