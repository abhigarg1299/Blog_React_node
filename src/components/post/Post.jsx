import React from 'react';
import './post.css';
export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque qui
        necessitatibus. Nobis dolorem voluptatem vel ex ducimus vero officiis
        consequatur eaque perspiciatis explicabo consectetur, magni eum
        architecto, aliquam sunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nisi eaque qui necessitatibus. Nobis dolorem
        voluptatem vel ex ducimus vero officiis consequatur eaque perspiciatis
        explicabo consectetur, magni eum architecto, aliquam sunt. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nisi eaque qui
        necessitatibus. Nobis dolorem voluptatem vel ex ducimus vero officiis
        consequatur eaque perspiciatis explicabo consectetur, magni eum
        architecto, aliquam sunt.
      </p>
    </div>
  );
}
