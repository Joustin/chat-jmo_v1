import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <section>
        <h1>Oh no! </h1>
        <p>
          Something went wrong.
          <br />
          <Link to="/">Return to Homepage</Link>
        </p>
      </section>
    </div>
  );
};

export default Error;
