import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <section>
        <p>Hello... My name is Justin. 👽</p>
        <p>
          I'm currently living in the Philadelphia area, working as a Front-End
          Engineer. I build web solutions with Javascript/Typescript in React.
        </p>
        <p>
          This is a new, WIP "homepage".
          <br />
          At this time I'm showing off a <br />
          <Link to="/chat">ChatGPT clone called Chat~JMo</Link>
        </p>
      </section>
      <div>
        <ul>
          <li>github</li>
          <li>linkedin</li>
          <li>soho six</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
