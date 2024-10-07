import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Meeting from "../assets/meeting.png";

const MeetingForm = () => {
    const location = useLocation();
    const mentor = location.state?.mentor;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        requirement: '',
        emailReminder: false,
        meetingDate: new Date(),
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, meetingDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the confirmation page and pass the form data
        navigate("/confirmation", { state: { ...formData, mentor } });
    };

    return (
        <div className="bg-white p-6 shadow-md shadow-orange-400 rounded-lg mb-20">
            {mentor ? (
                <>
                    <h2 className="text-xl text-center font-semibold mb-6">Schedule a Meeting with {mentor.name}</h2>
                    <div className="flex justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0">
                                <img
                                    src={mentor.profilePicture}
                                    alt={mentor.name}
                                    className="w-32 h-32 rounded-full bg-gray-200"
                                />
                            </div>
                            <div className="flex-grow">
                                <p className="text-lg font-medium">Name: {mentor.name}</p>
                                <p className="text-sm text-gray-600 mt-1">Expertise: {mentor.expertise}</p>
                            </div>
                        </div>
                        <img src={Meeting} alt="" className="w-64 h-64 mr-64" />
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <label className="block mt-4">
                            Your Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border hover:border-orange-500 rounded"
                                required
                            />
                        </label>
                        <label className="block mt-4">
                            Meeting Requirements:
                            <textarea
                                name="requirement"
                                maxLength="100"
                                value={formData.requirement}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border hover:border-orange-500 rounded"
                                required
                            />
                        </label>
                        <label className="block mt-4">
                            Select Meeting Date:
                            <DatePicker
                                selected={formData.meetingDate}
                                onChange={handleDateChange}
                                minDate={new Date()}
                                maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                                className="mt-1 block w-full px-3 py-2 border rounded cursor-pointer"
                                dateFormat="MMMM d, yyyy"
                            />
                        </label>
                        <label className="block mt-4">
                            <input
                                type="checkbox"
                                name="emailReminder"
                                checked={formData.emailReminder}
                                onChange={handleInputChange}
                            />
                            Send me a reminder via email
                        </label>
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
                        >
                            Schedule Meeting
                        </button>
                    </form>
                </>
            ) : (
                <p>Mentor information is not available.</p>
            )}
        </div>
    );
};

export default MeetingForm;
