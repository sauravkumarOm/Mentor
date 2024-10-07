import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({children})=>{
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow bg-cyan-50 p-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;