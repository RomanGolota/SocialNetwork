import React from "react";
import Preloader from "../../../common/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
    return (
    <div>
        {/* <div>
          <img src={props.profile.photos.large} />
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt=''/>
          {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )
}

export default ProfileInfo;