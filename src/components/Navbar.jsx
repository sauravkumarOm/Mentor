import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="min-h-14">
            <div className="min-h-14 flex justify-center items-center gap-10">  
                <Link to="/">
                    <h1 className="hover:text-orange-600">Home</h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar