import React, { useState } from "react";
import "./styles.css";
import brother from "./assets/brother.png";

function PostCard(props) {
  const [showHeartInfo, setShowHeartInfo] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [heartIcon, setHeartIcon] = useState("❤️");

  const toggleHeartIcon = () => {
    setHeartIcon((prevIcon) => (prevIcon === "❤️" ? "💔" : "❤️"));
    setShowHeartInfo(!showHeartInfo);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      const newComment = { text: commentText, id: Date.now() };
      setComments([...comments, newComment]);
      setCommentText("");
      setShowCommentInput(false);
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <li className="container">
      <div className="username">
        <img src={props.userImage} alt={props.userName} />
        <span>{props.userName}</span>
        <i className="options right">...</i>
      </div>
      <div className="image">
        <img src={props.image} alt={props.name} />
        <div id="heart" onClick={toggleHeartIcon}>{heartIcon}</div>
      </div>
      <div className="options">
        <i className="heart-icon" onClick={toggleHeartIcon}>
          {heartIcon}
        </i>
        <i className="comment-icon" onClick={() => setShowCommentInput(!showCommentInput)}>
          💬
        </i>
      </div>
      {showHeartInfo && (
        <div className="info">
          Ju Pelqeni  <strong>{props.userName}</strong>
        </div>
      )}
      {showCommentInput && (
        <div className="comment-input">
          <input
            type="text"
            placeholder="Komentoni Ketu!!!..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
      )}
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>x</button>
          </div>
        ))}
      </div>
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
            name="John"
            hobbies="Loves to travel"
            userName="John"
         />
        </ul>
      </section>
    </main>
  );
}

export default App;