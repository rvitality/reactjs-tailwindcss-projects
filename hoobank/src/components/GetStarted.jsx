import React from "react";
import styles from "../style";

import { arrowUp } from "../assets";

const GetStarted = ({ classes }) => {
    return (
        <div
            className={`${styles.flexCenter}  ${classes} group absolute right-0 w-[135px] h-[130px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
        >
            <div
                className={`${styles.flexCenter}  space-y-1 flex-col bg-primary w-full h-full rounded-full`}
            >
                <div className="flex  space-x-3 font-medium text-xl leading-6 ">
                    <span className="text-gradient ">Get </span>
                    <img
                        src={arrowUp}
                        alt="Arrow"
                        className="w-6 h-6 object-contain duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                </div>

                <div className="font-medium text-xl leading-6">
                    <span className="text-gradient ">Started</span>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
