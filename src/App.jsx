

import React, { useState } from "react";
import "./styles.css";
import brother from "./assets/brother.png";
import sister from "./assets/sister.png";

function PostCard(props) {
  const [showHeartInfo, setShowHeartInfo] = useState(false);
  const [showCommentInfo, setShowCommentInfo] = useState(false);
  const [showShareInfo, setShowShareInfo] = useState(false);
  const [showSaveInfo, setShowSaveInfo] = useState(false);

  return (
    <li className="container">
      <div className="username">
        <img src={props.userImage} alt={props.userName} />
        <span>{props.userName}</span>
        <i className="options right">...</i>
      </div>
      <div className="image">
        <img src={props.image} alt={props.name} />
        <div id="heart">❤️</div>
      </div>
      <div className="options">
        <i className="heart-icon" onClick={() => setShowHeartInfo(!showHeartInfo)}>
          ❤️
        </i>
        <i className="comment-icon" onClick={() => setShowCommentInfo(!showCommentInfo)}>
          💬
        </i>
        <i className="share-icon" onClick={() => setShowShareInfo(!showShareInfo)}>
          🔗
        </i>
        <i className="save-icon right" onClick={() => setShowSaveInfo(!showSaveInfo)}>
          ⭐
        </i>
      </div>
      {showHeartInfo && (
        <div className="info">
          Ju Pelqeni videon <strong>{props.userName}</strong>
        </div>
      )}
      {showCommentInfo && (
        <div className="info">
          ju po komentoni <strong>{props.userName}</strong>
        </div>
      )}
      {showShareInfo && (
        <div className="info">
          ju po i beni share <strong>{props.userName}</strong>
        </div>
      )}
      {showSaveInfo && (
        <div className="info">
          Ju e ruajtet <strong>{props.userName}</strong>
        </div>
      )}
    </li>
  );
}

function App() {
  return (
    <main>
      <section id="core-concepts">
        <ul>
          <PostCard
            image={brother}
            name="foo"
            hobbies="Loves to travel"
            userName="JohnDoe"
          />
          <PostCard
            image={sister}
            name="foo"
            hobbies="Enjoys hiking"
            userName="JaneDoe"
          />
        </ul>
      </section>
    </main>
  );
}

export default App;
