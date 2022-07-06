import React from 'react';
import './sidebar.css';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListitem">Life</li>
          <li className="sidebarListitem">Music</li>
          <li className="sidebarListitem">Style</li>
          <li className="sidebarListitem">Sport</li>
          <li className="sidebarListitem">Tech</li>
          <li className="sidebarListitem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
          <i className=" sidebarIcon fa-brands fa-instagram"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
