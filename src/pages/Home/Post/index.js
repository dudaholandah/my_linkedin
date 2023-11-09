import styles from './style.module.scss';
import * as React from 'react';
import * as Constants from '../../../data/constants'
import ButtonOptions from '../../../components/ui/Button/ButtonOptions';
import ButtonIcons from '../../../components/ui/Button/ButtonIcons';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import config from '../../../config/config';
import ProfilePhoto from '../../../components/ProfilePhoto';

function Post(){
  
  function body(post){
    return (
      <div>
        {post.text !== "" && 
        <div className={styles.cardText}>
          {post.text}
        </div>}

        {post.image !== "" && 
        <img className={styles.cardImage} alt='opus' width="100%" src={post.image}/>}

        {post.video !== "" &&
        <video className={styles.cardVideo} controls >
          <source src={post.video} type="video/mp4"/>
        </video>}
      </div>
    )
  }
  
  function renderCard(post){
    return(
      
      <div className={styles.card}>

        <div className={styles.informationsBar}>
          <div className={styles.icon}> < ProfilePhoto size="50px"/> </div>

          <div className={styles.informations}>
            <div> <strong>{post.name}</strong> </div>
            <div> {post.role} </div>
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
      { Constants.POSTS_EXAMPLE.map((post) => renderCard(post))}
    </div>
  );
}

export default Post