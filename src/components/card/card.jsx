import { Link } from "react-router-dom";
import "./card.scss";
const card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="image" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span className="parent">
                <span className="child">{item.bedroom}</span> bedroom
              </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span className="parent">
                <span className="child">{item.bathroom}</span> bathroom
              </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
