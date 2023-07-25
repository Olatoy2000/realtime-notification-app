import React from "react";
import { Notification, Message, Setting2 } from "iconsax-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Olatoy App</span>
      <div className="icons">
        <div className="icon">
          <Notification size="20" color="#fff" className="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <Message size="20" color="#fff" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <Setting2 size="20" color="#fff" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
