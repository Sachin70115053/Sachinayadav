import React from "react";
import "./MentorCard.css";

const MentorCard = (props) => {
  const randomPrice = Math.floor(Math.random() * 2000) + 1; // Generate random price less than 2000

  return (
    <div className="mentor-card-container">
      <div>
        <img src={props.mentor.image} alt="Mentor" />
      </div>
      <div className="mentor-details">
        <div className="mentor-header">
          <h1>Name: {props.mentor.name}</h1>
          {/* <div className="like-dislike-buttons">
            <button className="like-button">Like</button>
            <button className="dislike-button">Dislike</button>
          </div> */}
        </div>
        <h3>College: {props.mentor.college}</h3>
        <p>Current company: {props.mentor.currentCompany}</p>
        <h2>LPA: {props.mentor.LPA}</h2>
        <p>Skills: {props.mentor.skills}</p>
        <div className="price-tag">Price: ${randomPrice}</div>
        <button className="enroll-button">Enroll</button>
      </div>
    </div>
  );
};

export default MentorCard;
