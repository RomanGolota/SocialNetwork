import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsData = props.postData.map(item => <Post message={item.message} like={item.likesCount}/>);
  const newPostElement = React.createRef();
  
  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
          <div>
            <textarea ref={newPostElement}></textarea>
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