import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>John Doe</span>
          <p>lorem ipsum sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>lorem ipusm donor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
