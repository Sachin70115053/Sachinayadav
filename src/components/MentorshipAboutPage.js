import React from 'react';
import './MentorshipAboutPage.css'; // Import CSS file for styling

const MentorshipAboutPage = () => {
    return (
        <div className="about-us-container">
            <div className="row">
                <div className="column">
                    <h2>About Mentorship Program</h2>
                    <p>
                        Welcome to our Mentorship Program! We are dedicated to fostering a supportive environment where mentors and mentees can connect, learn, and grow together.
                    </p>
                    <p>
                        Our program aims to provide guidance, support, and resources to help mentees achieve their academic and professional goals. Whether you're seeking advice on career paths, technical skills, or personal development, our mentors are here to help you succeed.
                    </p>
                    <p>
                        Mentorship is a two-way street. While mentees benefit from the knowledge and experience of their mentors, mentors also gain satisfaction from sharing their expertise and helping others succeed. We believe in the power of mentorship to inspire, empower, and uplift individuals in their personal and professional journeys.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <h2>Contact Us</h2>
                    <p>Email: <a href="mailto:mentorship@yourwebsite.com">mentorship@yourwebsite.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
                </div>
                <div className="column">
                    <h2>Locate Us</h2>
                    <p>
                        Indian Institute of Information Technology (IIIT) Pune <br />
                        Survey No. - 9/1/3, Ambegaon Budruk, Sinhgad Institute Road <br />
                        Pune 411041
                    </p>
                </div>
                <div className="column">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Departments</a></li>
                        <li><a href="#">Centres</a></li>
                        <li><a href="#">Schools</a></li>
                        <li><a href="#">Centres of Excellence</a></li>
                        <li><a href="#">Anti-Sexual Harassment Policy</a></li>
                        <li><a href="#">Right to Information</a></li>
                        <li><a href="#">Switch to Dark Mode</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Rules</a></li>
                        <li><a href="#">Campus Life</a></li>
                        <li><a href="#">Institute Newsletter</a></li>
                        <li><a href="#">Educational Programmes</a></li>
                        <li><a href="#">PhD Seminar</a></li>
                        <li><a href="#">Climate Action Plan</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MentorshipAboutPage;
