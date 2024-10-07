import React, { useState } from "react";

const MentorRating = ({ mentor }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        // You can handle form submission or API call to save rating
        console.log(`Rated mentor ${mentor.name} with ${rate} stars.`);
    };

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-xl mx-auto mt-10">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Rate Your Mentor</h2>
            <p className="text-center mb-6 text-gray-600">How would you rate your meeting with <strong>{mentor.name}</strong>?</p>
            <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;

                    return (
                        <button
                            key={index}
                            type="button"
                            className={`text-3xl ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => handleRating(ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                        >
                            ★
                        </button>
                    );
                })}
            </div>
            {rating > 0 && (
                <p className="text-center text-gray-700">
                    You rated this mentor with <strong>{rating} out of 5</strong> stars!
                </p>
            )}
        </div>
    );
};

export default MentorRating;
