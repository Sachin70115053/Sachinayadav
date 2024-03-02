import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import CollegeLogo from "./components/CollegeLogo.js";
import Notification from "./components/Notification.js";
import Heading from "./components/Heading.js";
import Mentors from "./components/Mentors.js";
import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clubsData } from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { filterData } from "./data.js";

import {Routes,Route} from 'react-router-dom';
import MentorsProfile from "./components/MentorsProfile";
import { BrowserRouter } from 'react-router-dom';

import Abinay from "./components/Abinay.js"
import MentorshipAboutPage from "./components/MentorshipAboutPage.js";
import YourMentors from "./components/YourMentors.js"








function App() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true, // Show slides centered
    centerPadding: "30px", // Adjust spacing between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 400, // Adjust speed for responsiveness
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          speed: 400, // Adjust speed for responsiveness
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          speed: 400, // Adjust speed for responsiveness
        },
      },
    ],
  };

  return (
    <div className="App">


      
     <div>
        <Navbar filterData={filterData} />
      </div>

      <div>
        <CollegeLogo />
      </div>



      <Routes>
        <Route path='/yourmentors' element={<MentorsProfile/>}/>
        <Route path='/yourpersonal' element={<YourMentors/>}/>
          <Route path='/' exact element={<>

<div>
    <Notification />
  </div>

  <div className="programs">
    <Heading />
    <Mentors />
  </div>

  <div>
    <div>
      <h3>Our Clubs</h3>
    </div>
  </div>

  <div className="outer">
    <div className="inner">
      <Slider ref={sliderRef} {...settings} initialSlide={currentSlide}>
        {clubsData.map((d, index) => (
          <div key={index} className="slide">
            <div className="mp">
              <img className="image" src={d.img} alt={d.title} />
            </div>
            <div className="description">
              <p>{d.title}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="arrow-buttons">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={nextSlide}
        />
      </div>
    </div>
  </div>


</>}/>

        <Route path='/Abinay' element={<Abinay/>}/>


      </Routes>


      <MentorshipAboutPage/>







 


    
 


    </div>


    


  );
}

export default App;
