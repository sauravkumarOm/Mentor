import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import MentorCard from '../components/MentorsCard';
import Profile from "../assets/profile.webp";

// Mentor list
const mentors = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Web Development',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1, 
  },
  {
    id: 2,
    name: 'Aditi Sharma',
    expertise: 'Data Science',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 3,
    name: 'Samuel Lee',
    expertise: 'Mobile App Development',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 4,
    name: 'Priya Verma',
    expertise: 'Cloud Computing',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 5,
    name: 'Ravi Kumar',
    expertise: 'Cybersecurity',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 6,
    name: 'Anna Taylor',
    expertise: 'UI/UX Design',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 7,
    name: 'Arjun Singh',
    expertise: 'Machine Learning',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 8,
    name: 'Neha Gupta',
    expertise: 'Blockchain Development',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 9,
    name: 'Chris Evans',
    expertise: 'Digital Marketing',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 10,
    name: 'Meera Reddy',
    expertise: 'Cloud Security',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 11,
    name: 'James Hall',
    expertise: 'Artificial Intelligence',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 12,
    name: 'Liam Harris',
    expertise: 'DevOps',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 13,
    name: 'Ella Moore',
    expertise: 'Software Engineering',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 14,
    name: 'Zara Williams',
    expertise: 'Mobile Game Development',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 15,
    name: 'Ethan Taylor',
    expertise: 'Data Engineering',
    profilePicture: Profile,
    rating: Math.floor(Math.random() * 5) + 1,
  },
];




// Mentor Card with animation
const MentorCardWithAnimation = ({ mentor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-500 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
        }`}
    >
      <MentorCard mentor={mentor} />
    </div>
  );
};

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter mentors based on search query (name or expertise)
  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl text-center font-san">Mentors</h1>

      {/* Search Bar */}
      <div className="flex justify-center mt-10 mb-10">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-lg shadow-md w-1/2"
          placeholder="Search by name or expertise..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Mentor Cards Grid */}
      <div className="container mx-auto mt-20 mb-20">
        <div className="grid grid-cols-4 gap-6 mt-5">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <MentorCardWithAnimation key={mentor.id} mentor={mentor} />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">No mentors found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
