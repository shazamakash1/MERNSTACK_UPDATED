import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Hey Let's Welcome you to The Best Page of Us</p>
                            <h1>Welcome to Akash Pages</h1>
                            <p>Are you ready for the jammed packed website which 
                                will make your customer fall in love with the process
                                and the adventure that will follow you through. We server
                                all the needs and deeds which is needed for your webservice.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>

                        {/* {hero image} */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="Coding together" height="500" width="500" />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}

            <Analytics />

            {/* 3rd section */}

            <section className="section-hero">
                    <div className="container grid grid-two-cols">

                        {/* {hero image} */}
                        <div className="hero-image">
                            <img src="/images/design.png" 
                            alt="Coding together" 
                            height="500" 
                            width="500" />
                        </div>

                        <div className="hero-content">
                            <p>We are here to help you</p>
                            <h1>Get Started Today</h1>
                            <p>Ready to take the first step towards a more efficient and 
                                secure IT infrastructure? Contact us today for a free
                                consultation and let's discuss how Akash Sites can help
                                your business thrive in the digital age.
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

        </>
    );
};

