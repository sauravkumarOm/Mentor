import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Image01 from "../assets/confirm.webp";

const ConfirmationPage = () => {
    const location = useLocation();
    const { name, requirement, meetingDate, mentor } = location.state || {};
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);

        console.log(`Rated mentor with: ${rate} stars`);
    };

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg mt-10 max-w-4xl mx-auto mb-20">
            <div className="flex justify-between items-center">
                {/* Meeting Details Section */}
                <div className="flex-1 pr-10">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Meeting Confirmation</h2>
                    <p className="text-gray-700">You have successfully scheduled a meeting!</p>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Meeting Details:</h3>
                        {mentor ? (
                            <>
                                <p className="text-gray-800"><strong>Mentor:</strong> {mentor.name}</p>
                                <p className="text-gray-800"><strong>Expertise:</strong> {mentor.expertise}</p>
                            </>
                        ) : (
                            <p className="text-red-500">Mentor information is not available.</p>
                        )}
                        <p className="mt-2 text-gray-800"><strong>Your Name:</strong> {name}</p>
                        <p className="mt-2 text-gray-800"><strong>Meeting Date:</strong> {meetingDate ? meetingDate.toLocaleDateString() : "N/A"}</p>
                        <p className="mt-2 text-gray-800"><strong>Requirements:</strong> {requirement}</p>
                    </div>

                    {/* Rating Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Rate Your Mentor:</h3>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`cursor-pointer text-3xl ${star <= rating ? "text-orange-500" : "text-gray-400"}`}
                                    onClick={() => handleRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        {rating > 0 && <p className="mt-2 text-gray-700">You rated {rating} star{rating > 1 ? 's' : ''}!</p>}
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img
                        src={Image01}
                        alt="Confirmation Illustration"
                        className="w-64 h-64 rounded-lg shadow-md shadow-orange-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
