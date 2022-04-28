let State = {
  ProfilePage: {
    PostsData: [
      { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
      { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
      { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 }
    ],
    Users: [
      {id: 1, userName: 'Jolly Docker', about: 'Pretty lady'}
    ]
  },
  MessagePage: {
    ContactsData: [
      { name: 'Sara Connor', id: 'Connor' },
      { name: 'Lisa Fahrenheit', id: 'Fahrenheit' },
      { name: 'Rose Friedman', id: 'Friedman' },
      { name: 'Frank Sinatra', id: 'Sinatra' },
      { name: 'John Silver', id: 'Silver' },
      { name: 'Tomas Fisher', id: 'Fisher' },
      { name: 'Lili Walker', id: 'Walker' }
    ],
    MessData: [
      { id: 1, message: 'Hello!', name: 'Frank Sinatra', time: '15:20' },
      { id: 2, message: 'It\'s my first private chat', name: 'Frank Sinatra', time: '15:21' },
      { id: 3, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:21' },
      { id: 4, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
      { id: 5, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
      { id: 6, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
      { id: 7, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
      { id: 8, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
      { id: 9, message: 'HaHaHa!!! I like it!!', name: 'Frank Sinatra', time: '15:24' }
    ]
  }
};

export let addPost = (newMess) => {
  let newPost = {
    id: 4,
    name: 'Jolly Docker',
    message: (newMess),
    time: '14:58',
    likeCounter: 0
  };
  State.ProfilePage.PostsData.push(newPost);
} ;
export default State;