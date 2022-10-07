import React from "react";

import {
    Billing,
    Business,
    CardDeal,
    Clients,
    CTA,
    Footer,
    Navbar,
    Stats,
    Testimonials,
    Hero,
} from "./components";

import styles from "./style";

const App = () => {
    return (
        <main className="bg-primary text-white w-full overflow-hidden ">
            <header className={`relative z-50  ${styles.paddingX} `}>
                <div className={`${styles.boxWidth}  mx-auto`}>
                    <Navbar />
                </div>
            </header>

            {/* HERO */}
            <section id="hero" className={`bg-primary  ${styles.paddingX}  lg:pr-0 lg:pl-16  `}>
                <div className={`${styles.boxWidth} mx-auto`}>
                    <Hero />
                </div>
            </section>
        </main>
    );
};

export default App;
