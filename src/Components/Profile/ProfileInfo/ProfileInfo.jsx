import React from "react";
import Preloader from "../../../common/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
    return (
    <div>
        <div>
          <img src={props.profile.photos.large} />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;