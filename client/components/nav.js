import React from 'react';

const Nav = () => {
  return (
    <div className="nav-parent">
      <ul className="nav-container">
        <li className="nav-item ">
          <a className="disabled" href="#">
            Store (Coming Soon)
          </a>
        </li>
        <li className="nav-item">
          <a href="#">The Pantry</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/6b5971a47f6ffedfd4929db284ada8cd3f7d4dae/86294/images/icon_instagram-6b5971a4.svg"
            width="22"
            alt="Instagram"
          />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
