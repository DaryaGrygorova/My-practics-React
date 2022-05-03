import Users from '../../components/Users/Users';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  Users: [
    { id: 1, followed: true, userName: 'Jolly Docker', about: 'Pretty lady', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 2, followed: false, userName: 'Sara Connor', about: 'Astronaut', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 3, followed: false, userName: 'Lisa Fahrenheit', about: 'Candy - it\'s my love', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 4, followed: true, userName: 'Rose Friedman', about: 'Girl with funny nose', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 5, followed: false, userName: 'Frank Sinatra', about: 'Music - it\'s all...', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 6, followed: false, userName: 'John Silver', about: 'Freelancer', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 7, followed: true, userName: 'Tomas Fisher', about: 'ChokoBanny', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    { id: 8, followed: true, userName: 'Lili Walker', about: 'My little world', photoURL: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' }
  ],
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        Users: state.Users.map ( user => {
          if (Users.id === action.userId) {
            return {...user, followed: true} }
          return user;
        }
      )}
      return stateCopy;}

    case UNFOLLOW: {
      let stateCopy = {
        Users: state.Users.map ( user => {
          if (user.id === action.userId) {
            return {...user, followed: false} }
          return user;
      }
    )}
      return stateCopy;}

    case SET_USERS: {
      return {...state,
      Users: [...state.Users, action.users]};
    }
    default:  return state;
  };
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});