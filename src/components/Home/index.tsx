import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../Svgs/GitHub";
import LinkedInLogo from "../Svgs/LinkedIn";
import IconButton from "../IconButton";

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
          <Link to="/chat">ChatGPT clone called Chat~JMo 💬</Link>
        </p>
      </section>
      <div>
        <ul className="links">
          <li>
            <IconButton
              icon={<GitHubLogo width="30" height="30" />}
              text="Github"
              url="https://github.com/joustin"
            />
          </li>
          <li>
            <IconButton
              icon={<LinkedInLogo width="28" height="28" />}
              text="Linkedin"
              url="https://www.linkedin.com/in/justinmorgan101/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
