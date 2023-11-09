import styles from './style.module.scss';
import * as React from 'react';
import * as Constants from '../../../data/constants'
import ButtonOptions from '../../../components/ui/Button/ButtonOptions';
import ButtonIcons from '../../../components/ui/Button/ButtonIcons';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import config from '../../../config/config';
import ProfilePhoto from '../../../components/ProfilePhoto';
import { useEffect } from 'react';
import { useState } from 'react';

function Post(){
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('scrapper.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => {

      var auxPost = []

      for(var i=0; i<Object.keys(json).length; i++){
        auxPost.push({
          'text': json['text'][i],
          'links': json['links'][i],
          'link_type': json['link_type'][i]
        }) 
      }

      console.log(auxPost)

      setPosts(auxPost)

    }    
    )

    

  }, [])

  function body(post){
    return (
      <div>
        {post.text !== "" && 
        <div className={styles.cardText}>
          {post.text}
        </div>}

        {(post.link_type === "Photo" || post.link_type === "Celebration") && 
          post.links.map((img) => <img className={styles.cardImage} alt='opus' width="100%" src={img}/>)
        }
      </div>
    )
  }
  
  function renderCard(post){
    return(
      
      <div className={styles.card}>

        <div className={styles.informationsBar}>
          <div className={styles.icon}> < ProfilePhoto size="50px"/> </div>

          <div className={styles.informations}>
            <div> <strong>{Constants.PROFILE_INFOS.nome}</strong> </div>
            <div> {Constants.PROFILE_INFOS.cargo_minimal} </div>
          </div>
        
          <div className={styles.topRight}>
            <ButtonOptions/>
          </div>
        </div>
      
        {body(post)}

        <div className={styles.postOptions}>
          <ButtonIcons name='curtir' icon={Icons.faThumbsUp}/>
          <ButtonIcons name='comentar' icon={Icons.faComment}/>
          <ButtonIcons name='compartilhar' icon={Icons.faRetweet}/>
        </div>

      </div>
    );
  };

  return(
    <div className={styles.timeline}>
      {posts.map(post => renderCard(post))}
    </div>
  );
}

export default Post