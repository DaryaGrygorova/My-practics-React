const Content = () => {
  return (
      <main className="content">
        <img
          src="https://interier-foto.ru/wp-content/uploads/2014/11/severo-chujskij-hrebet6393.jpg"
          alt="banner image"
          with="1200"
          height="300"
        />
        <div className="user__about">
          <img src="https://cdn-icons-png.flaticon.com/512/646/646328.png" className="user__photo" alt="User foto" with="260" height="250" />
          <div className="user__description">John Docker</div>
        </div>
          <div className="New-post">
          <h2 className='New-post__title'>My Post</h2>
          <input className='New-post__input'/>
          <button className='New-post button button' type='button'>Send</button>
          </div>
        <div className="user__content">
<div>Post1</div>
<div>Post2</div>
<div>Post3</div>
        </div>
      </main>
  );
};

export default Content;
