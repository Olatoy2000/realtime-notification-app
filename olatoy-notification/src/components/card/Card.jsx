import { Heart, InfoCircle } from "iconsax-react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" />
        <span className="">{post.fullName}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        <Heart size="20" color="#FF8A65" className="cardIcon" />
        <Icon
          icon="mdi-light:comment"
          color="FF8A65"
          width="20"
          height="20"
          className="cardIcon"
        />
        <Icon
          icon="material-symbols:share"
          color="FF8A65"
          width="20"
          height="20"
          className="cardIcon"
        />
        <InfoCircle size="32" color="#FF8A65" className="cardIcon" />
      </div>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    userImg: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    postImg: PropTypes.string.isRequired,
    // Add more prop types as needed for the post object
  }).isRequired,
};

export default Card;
