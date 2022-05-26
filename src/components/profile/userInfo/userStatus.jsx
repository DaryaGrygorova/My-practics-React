import styles from './userInfo.module.css';
import React from 'react';

class UserStatus extends React.Component {
  state = {
    editMode: false,
    }

  activateEditMode = () => {
    this.setState ({editMode: true})
  };

  deactivateEditMode = () => {
    this.setState ({editMode: false})
  };

  onChangeStatus = () => {

  };

  render() {
    return (
      <div>
        {(!this.state.editMode)
        ? <p className={styles.status}
             onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status}
          </p>
        : <input className={styles.input}
                 value={this.props.status}
                 type="text"
                 onBlur={this.deactivateEditMode.bind(this)}
                 onChange={this.onChangeStatus.bind(this)}
                 autoFocus />}
      </div>
    );
  };
};
export default UserStatus;
