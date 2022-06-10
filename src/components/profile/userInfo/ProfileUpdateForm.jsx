import React from 'react';
import styles from './userInfo.module.css';
import userPhoto from '../../images/customer_person_people_man.png';

const ProfileUpdateForm = props => {
  return (
    <div className={styles.ProfileUpdateForm}>
      <b>About me:</b>
      {props.Profile.lookingForAJob ? (
        <div>
          <p>
            <b>#OpenToWork </b>
          </p>
          <p>{props.Profile.lookingForAJobDescription ?? ''}</p>
        </div>
      ) : null}
      {props.Profile.aboutMe ?? '  ---'}
      <button className="button" onClick={props.deactivateEditMode}>
        Send
      </button>
    </div>
  );
};

export default ProfileUpdateForm;
