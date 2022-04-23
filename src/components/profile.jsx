const Profile = () => {
  return (
    <main className="profile content">
      <img
        src="https://interier-foto.ru/wp-content/uploads/2014/11/severo-chujskij-hrebet6393.jpg"
        alt="banner image"
        with="1200"
        height="300"
      />
      <div className="user">
        <img
          src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
          className="user__photo"
          alt="User photo"
          with="260"
          height="250"
        />
        <div className="user__description">
          <h2 className="user__name">Jenny Docker</h2>
          <p className="user__about">Pretty ukrainian lady</p>
        </div>
      </div>
      <div className="posts">
        <h2 className="posts__title">My posts</h2>
        <div className="new-post">
          <textarea
            className="new-post__input"
            name="new-post"
            rows="3"
            placeholder="Введите текст"
          ></textarea>
          <button className="new-post__button button" type="button">
            Send
          </button>
        </div>
        <ul className="post">
          <li className="post__wrapper">
            <div className="post__description">
              <img
                className="post__photo"
                src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
                alt="User photo"
                with="40"
                height="40"
              />
              <div className="post__about">
              <h2 className="post__name">Jenny Docker</h2>
              <p className="post__data">Дата и время</p>
              </div>
            </div>
              <p className="post__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum
                expedita illum explicabo. In cum asperiores laudantium delectus, possimus ipsa
                deserunt repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
              </p>
          </li>
          <li className="post__wrapper">
            <div className="post__description">
              <img
                className="post__photo"
                src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
                alt="User photo"
                with="40"
                height="40"
              />
              <div className="post__about">
              <h2 className="post__name">Jenny Docker</h2>
              <p className="post__data">Дата и время</p>
              </div>
            </div>
              <p className="post__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum
                expedita illum explicabo. In cum asperiores laudantium delectus, possimus ipsa
                deserunt repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
              </p>
          </li>
          <li className="post__wrapper">
            <div className="post__description">
              <img
                className="post__photo"
                src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
                alt="User photo"
                with="40"
                height="40"
              />
              <div className="post__about">
              <h2 className="post__name">Jenny Docker</h2>
              <p className="post__data">Дата и время</p>
              </div>
            </div>
              <p className="post__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum
                expedita illum explicabo. In cum asperiores laudantium delectus, possimus ipsa
                deserunt repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
              </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Profile;
