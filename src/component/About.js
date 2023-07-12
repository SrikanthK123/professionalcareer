import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
    <div className="home">
      <div className="nameTitle">
        <h4>About</h4>
        <p className="p1">
          I'm an aspiring MERN stack developer, eager to kickstart my journey in
          the world of web development. Excited to share my passion for creating
          dynamic and interactive websites using the MERN stack.I have a solid
          foundation in the fundamental concepts of HTML, CSS, and JavaScript,
          which form the building blocks of web development.
        </p>
        <p className="p2">
          In my learning journey, I have discovered the immense potential of the
          MERN stack, which combines MongoDB, Express.js, React.js, and Node.js.
          This powerful combination allows for the development of feature-rich
          web applications that leverage both frontend and backend technologies.
          On the frontend, I'm honing my skills in React.js, a popular
          JavaScript library for building user interfaces. I enjoy creating
          responsive and intuitive designs using React's component-based
          approach. I'm also familiarizing myself with state management using
          libraries like Redux, which enable efficient data flow within the
          application.While my experience might be limited, I'm passionate about
          solving problems and building practical projects. I'm excited to
          collaborate with others, contribute to open-source projects, and
          engage in continuous learning to refine my skills.
        </p>
        <p className="p3">
          Please take a moment to browse through my portfolio to see the
          projects I've been working on. I'm thrilled to connect with fellow
          developers, potential collaborators, and mentors who share my passion
          for MERN stack development. Let's embark on this exciting journey
          together!"
        </p>
        <Link to="/education"><button className="educationBtn">Educational Details</button></Link>
        <Link to="/achievements"><button className="achievementsBtn">Achievements</button></Link>
      </div>
    </div>
    </div>
  );
};

export default About;
