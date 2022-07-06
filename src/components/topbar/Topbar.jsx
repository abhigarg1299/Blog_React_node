import React from 'react';
import './topbar.css';
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter-square"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
        <i className=" topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
