import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const MentorCard = ({ mentor }) => {
    const mentorRating = mentor.rating || 0; 
    const navigate = useNavigate();

    const handleClickCard = ()=>{
        navigate(`/mentor-detail/${mentor.id}`, {state: {mentor}});
    }

    return (
        <div className="bg-white shadow-md h-80 w-72 p-4 rounded-xl flex flex-col justify-between cursor-pointer group hover:bg-orange-500 hover:text-white duration-300 hover:translate-x-1 hover:-translate-y-1">
            <div onClick={handleClickCard}>
                <div className='flex justify-center'>
                    <img src={mentor.profilePicture} alt={mentor.name} className="w-32 h-32 rounded-full bg-gray-200" />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center group-hover:text-white">{mentor.name}</h3>
                <p className="text-sm text-center text-gray-500 group-hover:text-white">{mentor.expertise}</p>

                {/* Display the star rating */}
                <div className="flex justify-center mt-2">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <span key={index} className={`text-xl ${ratingValue <= mentorRating ? 'text-yellow-500' : 'text-gray-300'}`}>
                                ★
                            </span>
                        );
                    })}
                </div>
            </div>
            <Link to="/meeting-schedule" state={{ mentor }}>
                <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-xl group-hover:bg-white group-hover:text-black duration-150">
                    Schedule a Meeting
                </button>
            </Link>
        </div>
    );
};

export default MentorCard;
