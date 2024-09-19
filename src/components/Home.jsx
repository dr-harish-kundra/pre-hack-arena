import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/logo.jpeg";

const Home = () => {
  return (
    <div className="container">
      <img src={img1} alt="Hack-Arena Logo" className="logo" />
      <h1>Hack-Arena</h1>
      <p>
        We're putting the final touches on our website. Stay tuned for something
        awesome!
      </p>
      <p>
        In the meantime, follow us on{" "}
        <a
          href="https://instagram.com/ieee_gni"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        for updates.
      </p>
      <p className="contact">
        For inquiries, contact us at{" "}
        <a href="mailto:ieee_gnitc@gniindia.org">ieee_gnitc@gniindia.org</a>.
      </p>
      <Link to="/register">Go to Register</Link>
    </div>
  );
};

export default Home;
