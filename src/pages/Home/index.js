import styles from './style.module.scss'
import NewPost from './NewPost';
import Sidebar from './Sidebar';
import News from './News';
import Post from './Post';
import Navbar from '../../components/Navbar';

function Home(){
  return (
    <><Navbar/>
    <div className={styles.home}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <NewPost />
        <hr style={{ borderTop: "1px solid #bbb", width: "100%" }}></hr>
        <Post />
      </main>
      <aside>
        <News />
      </aside>
    </div></>
  )
}

export default Home