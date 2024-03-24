import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  // if(useAuth()){
  //   {userName} = useAuth();
  // }
  return (
    <>
      <main>
        <section>
          <div className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>Welcome, {user ? user.username : `to our Website`}!</p>
                <h1>Why Choose Us?</h1>
                <p>
                  Expertise: Our team consists of experienced IT professionals
                  who are passionate about staying up-to-date with the latest
                  industry trends.
                </p>
                <p>
                  Customization: We understand that every business is unique.
                  That's why we create solutions that are tailored to your
                  specific needs and goods.
                </p>
                <p>
                  Customer-Centric Approach. We proritize your sanction and
                  provide top-notch support to address your IT concerns.
                </p>
                <p>
                  Affordability: We offer competiitve pricing without
                  compromising on the quality of our services.
                </p>
                <p>
                  Reliability: Count on us to be there when you need us. We're
                  committed to ensuring your IT environment is reliable and
                  available 24/7.
                </p>

                <div className="btn btn-group">
                  <NavLink to="/contact">
                    <button className="btn">Connect Now</button>
                  </NavLink>
                  <NavLink to="/service">
                    <button className="btn secondary-btn">Learn More</button>
                  </NavLink>
                </div>
              </div>

              {/* {hero image} */}
              <div className="hero-image">
                <img
                  src="/images/about.png"
                  alt="Coding together"
                  height="500"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
