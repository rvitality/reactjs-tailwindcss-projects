import React from "react";
import { discount, robot } from "../assets";

import GetStarted from "./GetStarted";

import styles from "../style";

const Hero = () => {
    return (
        <div className={`flex py-8  flex-col lg:flex-row lg:py-24 `}>
            <div className="relative lg:w-1/2">
                {/* DISCOUNT */}
                <div className="flex items-center bg-discount-gradient w-full px-6 py-2 rounded-xl mb-6 space-x-3 xs:w-max ">
                    <img src={discount} alt="discount" className="w-10 h-10" />
                    <div className={`${styles.paragraph} flex flex-col md:space-x-2 md:flex-row`}>
                        <p>
                            <span className="text-white">20%</span> <span>Discount For</span>
                        </p>
                        <p>
                            <span className="text-white">1 Month</span> <span>Account</span>
                        </p>
                    </div>
                </div>

                <GetStarted classes="hidden md:flex lg:bottom-1/4 xl:top-0" />

                {/* MAIN TEXT CONTENT */}
                <h1 className="font-semibold text-3xl text-center xs:text-left xs:text-4xl md:text-5xl md:leading-tight lg:text-7xl   ">
                    The Next <br className="hidden sm:block" />{" "}
                    <span className="text-gradient">Generation</span> Payment Method
                </h1>
                <p className={`mt-5 max-w-lg ${styles.paragraph} text-center xs:text-left`}>
                    Our team of experts uses a methodology to identify the credit cards most likely
                    to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* IMAGE */}
            <div className="relative md:w-[25rem] md:mx-auto  lg:w-1/2">
                <img
                    src={robot}
                    alt="Robot Hand"
                    className="mt-10 right-0 md:h-full lg:h-auto lg:mt-0 lg:absolute"
                />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>

            <GetStarted classes="md:hidden relative m-auto mt-5" />
        </div>
    );
};

export default Hero;
