import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  const postsData = props.posts.map(item => <Post message={item.message} like={item.likesCount} key={item.id}/>);
  const newPostElement = React.createRef();

  const onPostChange = () => {
    
    const text = newPostElement.current.value;
    
    props.updateNewPostText(text)
  }

  const addPost = () => {
    props.addPost();
  }
 
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
            {postsData}
      </div>
    </div>
  )
}

export default MyPosts;