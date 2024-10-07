import React from "react";
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image01 from "../assets/mentor_image.png";

const MentorDetail = () => {
    const location = useLocation();
    const { mentor } = location.state || {};

    if (!mentor) {
        return <p>No mentor information available.</p>;
    }

    const mentorRating = mentor.rating || 0; 

    return (
        <div className="flex justify-between p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg mt-10 mb-20">
            <div>
                <h2 className="text-2xl font-semibold">{mentor.name}</h2>
                <p className="text-lg text-gray-600">{mentor.expertise}</p>
                <img src={mentor.profilePicture} alt={mentor.name} className="w-32 h-32 rounded-full mt-4" />
                <div className="gap-2 flex justify-center mt-2">
                    <p>Rating</p>
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <span key={index} className={`text-xl ${ratingValue <= mentorRating ? 'text-yellow-500' : 'text-gray-300'}`}>
                                ★
                            </span>
                        );
                    })}
                </div>
                <Link to="/meeting-schedule" state={{ mentor }}>
                    <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-xl duration-150 hover:bg-orange-700">
                        Schedule a Meeting
                    </button>
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <img src={Image01} alt="" className="w-72 h-52" />
                
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4 text-orange-500">
                    <a href={mentor.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    </a>
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </a>
                    <a href={mentor.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                    </a>
                    <a href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MentorDetail;
