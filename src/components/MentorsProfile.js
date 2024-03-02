import React, { useState, useRef } from "react";
import Navbar from "./Navbar.js";
import CollegeLogo from "./CollegeLogo.js";
import Notification from "./Notification.js";
import Heading from "./Heading.js";
import Mentors from "./Mentors.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clubsData } from "../data.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { filterData } from "../data.js";


import { mentorsData } from "../data.js";
import MentorsCards from "./MentorsCards"
import "./MentorsProfile.css"

const MentorsProfile=()=>{

    console.log(mentorsData)

    return(
        <div className="MentorContainer">
            <MentorsCards mentorsData={mentorsData}/>
        </div>
    )

}

export default MentorsProfile