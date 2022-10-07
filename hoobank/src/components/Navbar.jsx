import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggled, setToggled] = useState(false);

    const toggleMobileMenuHandler = () => {
        setToggled(prevState => !prevState);
    };

    return (
        <div className="flex items-center justify-between py-6">
            <a href="#" className="flex ">
                <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />
            </a>

            <nav>
                {/* Desktop Menu */}
                <ul className="hidden sm:flex items-center space-x-6 text-white">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className="sm:hidden flex flex-1 justify-end items-center"
                    onClick={toggleMobileMenuHandler}
                >
                    <img
                        src={toggled ? close : menu}
                        alt="Menu Icon"
                        className="w-[25px] h-[25px] object-contain"
                    />
                </button>

                {/* Mobile Menu */}
                <div
                    className={`${
                        toggled ? "flex" : "hidden"
                    } sm:hidden absolute p-6 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
                >
                    <ul className="flex flex-col space-y-6 text-white">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
