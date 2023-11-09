import styles from './style.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
import * as Constants from '../../data/constants';
import * as React from 'react';
import ButtonOptions from '../../components/ui/Button/ButtonOptions';
import config from '../../config/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Notification(){

  function renderCard(notif){
    return(
      <div className={styles.card}>
        
        <div className={styles.topBar}>    
          <div className={styles.icon}><FontAwesomeIcon icon={faBell} className="iconImg" /></div>

          <div className={styles.topRight}>
            <ButtonOptions/>
          </div>
        </div>

        <body className={styles.cardBody}>
          <h4>{notif.title}</h4>
          <p>{notif.text}</p>
        </body>

      </div>
    );
  };
  
  return(
    <><Navbar/>
    <div className={styles.notification}>
      {Constants.NOTIFICATION_EXAMPLES.map((notif) => renderCard(notif))}
    </div>
    </>
  );
}

export default Notification
