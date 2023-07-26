import { Heart, InfoCircle } from "iconsax-react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendText", {
      senderName: user,
      receiverName: post.userName,
      text: "hello this is chat message",
    });
  };

  // const handleNotification = (text) => {
  //   setLiked(true);
  //   socket.emit("sendText", {
  //     senderName: user,
  //     receiverName: post.userName,
  //     text: "hello this is chat message",
  //   });
  // };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span className="">{post.fullName}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <Heart
            size="20"
            color="#e94c1d"
            variant="Bold"
            className="cardIcon"
          />
        ) : (
          <Heart
            size="20"
            color="#343541"
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <Icon
          icon="mdi-light:comment"
          color="#343541"
          width="20"
          height="20"
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <Icon
          icon="material-symbols:share"
          color="#343541"
          width="20"
          height="20"
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <InfoCircle size="20" color="#343541" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    postImg: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    // Add more prop types as needed for the post object
  }).isRequired,
  user: PropTypes.checkPropTypes({}),
  socket: PropTypes.shape({
    emit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
