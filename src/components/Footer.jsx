import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-orange-500 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section: ProElevate Logo and Description */}
                <div>
                    <h2 className="font-bold text-lg mb-4">ProElevate</h2>
                    <p>Join Our Community: Connect with like-minded individuals and grow your network.</p>
                </div>

                {/* Column 1: ProElevate's Links */}
                <div>
                    <h3 className="font-bold mb-4">ProElevate's</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Column 2: Useful Links */}
                <div>
                    <h3 className="font-bold mb-4">Useful Links</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">DSA Practice</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Interviews</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Competitions</a></li>
                        <li><a href="#" className="hover:underline">Resources</a></li>
                    </ul>
                </div>

                {/* Column 3: Social Links and Contact */}
                <div>
                    <h3 className="font-bold mb-4">Follow us on</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="hover:opacity-75">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                        </a>
                    </div>
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p className="mb-2">arshgoyal98@gmail.com</p>
                    <a href="#" className="hover:underline">Feedback</a>
                </div>
            </div>

            <div className="border-t border-orange-600 mt-6 py-4 text-center">
                <p>Copyright © 2024 ProElevate - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
