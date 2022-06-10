import React, { useState, useEffect, setState } from 'react';
import styles from './userInfo.module.css';
import userPhoto from '../../images/customer_person_people_man.png';
import Preloader from '../../../common/preloader/isFetching_preloader';
import Banner from '../../images/Baner.jpg';
import UserStatusWithHook from './userStatus-withHook';
import UserContactsWithHook from './userContacts-withHook';
import ProfileUpdateForm from './ProfileUpdateForm';

const UserInfo = React.memo(props => {
  let [editMode, setEditMode] = useState(false);
  let [newProfileData, setProfileData] = useState('');

  useEffect(() => {
    setProfileData(props.Profile);
  }, [props.Profile]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileData(newProfileData);
  };

  // const onChangeStatus = event => {
  //   setStatus(event.currentTarget.value);
  // };

  const userPhotoSelected = event => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      props.addUserPhoto(file);
    }
  };

  if (!props.Profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <img src={Banner} alt="banner" width="1200" height="300" />
      </div>
      <div className={styles.thumb}>
        <div className={styles.photoWrapper}>
          <img
            className={styles.photo}
            src={props.Profile.photos.large != null ? props.Profile.photos.large : userPhoto}
            alt="User"
            width="260"
            height="250"
          />
          {props.isOwner ? (
            <label className={styles.photoInput}>
              <input
                className="visually-hidden"
                type="file"
                name="photo"
                accept="image/*,image/jpeg"
                onChange={userPhotoSelected}
              />
              +
            </label>
          ) : null}
        </div>
        <div className={styles.description}>
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{props.Profile.fullName}</h1>
            <p className={styles.userId}>User ID: {props.Profile.userId}</p>
            <UserStatusWithHook
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}
            />
          </div>
          <div className={styles.userAbout}>
            <div className={styles.about}>
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
            </div>
            <UserContactsWithHook Profile={props.Profile} />
          </div>
          {props.isOwner ? (
            <div>
              <button className={styles.openFormButton} onClick={activateEditMode}>
                +
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {editMode ? (
        <ProfileUpdateForm Profile={props.Profile} deactivateEditMode={deactivateEditMode} />
      ) : null}
    </div>
  );
});

export default UserInfo;
