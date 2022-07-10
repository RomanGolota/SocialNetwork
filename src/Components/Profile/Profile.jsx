import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(`state in Profile`)
  console.log(props);
   return (
      <div>
      <ProfileInfo/>
      <MyPosts postData={props.profilePage.postData}
               newPostText={props.newPostText} 
               dispatch={props.dispatch}/>
      </div>
    )
}

export default Profile;