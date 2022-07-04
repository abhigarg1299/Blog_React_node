import React from 'react';
import './singlePost.css';
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Safak</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fuga
          voluptate facilis iure eveniet? Expedita tempore soluta corporis nulla
          quidem quae, debitis laboriosam obcaecati? Nobis aliquid laboriosam
          nostrum earum culpa! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Neque fuga voluptate facilis iure eveniet? Expedita
          tempore soluta corporis nulla quidem quae, debitis laboriosam
          obcaecati? Nobis aliquid laboriosam nostrum earum culpa! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Neque fuga voluptate
          facilis iure eveniet? Expedita tempore soluta corporis nulla quidem
          quae, debitis laboriosam obcaecati? Nobis aliquid laboriosam nostrum
          earum culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Neque fuga voluptate facilis iure eveniet? Expedita tempore soluta
          corporis nulla quidem quae, debitis laboriosam obcaecati? Nobis
          aliquid laboriosam nostrum earum culpa!
        </p>
      </div>
    </div>
  );
}
