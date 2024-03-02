import React, { useState, useEffect } from "react";
import "./Notification.css";
import font from "./Notification_Images/font1.jpg";
import font1 from "./Notification_Images/font.jpg";
import font2 from "./Notification_Images/font2.jpg";

const Notification = () => {
    const images = [font, font1, font2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="Notification">
            <img className="twenty" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
    );
};

export default Notification;
