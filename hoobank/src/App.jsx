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
        <main className="bg-primary w-full overflow-hidden">
            <header className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </header>
        </main>
    );
};

export default App;
