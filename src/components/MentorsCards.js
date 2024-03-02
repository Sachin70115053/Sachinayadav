import React from "react";
import MentorCard from "./MentorCard"; // Corrected import statement


const MentorsCards = (props) => {

    const data = props.mentorsData;

    return data.map((mentor, index) => 
    <div >
        <MentorCard key={index} mentor={mentor} />
    </div>
    )

    
}

export default MentorsCards;
