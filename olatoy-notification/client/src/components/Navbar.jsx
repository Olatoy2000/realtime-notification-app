import { useEffect, useState } from "react";
import { Notification, Message, Setting2 } from "iconsax-react";
import PropTypes from "prop-types";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notifications);

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented on";
    } else if (type === 3) {
      action = "shared";
    }

    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Olatoy App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <Notification size="20" color="#fff" className="" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon">
          <Message size="20" color="#fff" onClick={() => setOpen(!open)} />
        </div>
        <div className="icon">
          <Setting2 size="20" color="#fff" onClick={() => setOpen(!open)} />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="mbtn" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};
Navbar.propTypes = {
  socket: PropTypes.shape({
    on: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navbar;
