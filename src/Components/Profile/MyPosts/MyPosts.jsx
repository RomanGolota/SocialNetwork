import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsData = props.postData.map(item => <Post message={item.message} like={item.likesCount}/>);
  const newPostElement = React.createRef();
  
  // const addPost = () => {
  //   props.addPost()
  // }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  console.log(`Props in MyPosts`);
  console.log(props);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={props.addPost}>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
            {postsData}
      </div>
    </div>
  )

}

export default MyPosts;