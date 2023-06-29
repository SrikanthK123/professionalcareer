import React from "react";

import img1 from'../images/python.svg'
import img2 from '../images/java.svg'
import img3 from'../images/C.svg'
import img4 from'../images/html5.svg'
import img5 from'../images/css.svg'
import img6 from'../images/js.svg'
import img7 from'../images/react.svg'
import img8 from'../images/mysql.png'
import img9 from'../images/django.png'
import img10 from'../images/nodejs.svg'
import img11 from'../images/expressjs.svg'
import img12 from'../images/mongoDB.svg'
const Skills = () => {
  return (
    <>
      <div className="Skills">
        <div className="skillsTitle">
          <h4>Skills</h4>
          
            <div className="row" id="rowSkills">
              <div className="col-sm-4" id="card1">
              <img id="pythonimg" src={img1} className="card-img-top" alt="..."/>
             <a href='https://www.python.org/'><h5 className="langs">Python</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="javaimg" src={img2} className="card-img-top" alt="..."/>
             <a href='https://dev.java/'><h5 className="langs">Java</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="Cimg" src={img3} className="card-img-top" alt="..."/>
             <a href='https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170'><h5 className="langs">C-language</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="htmlimg" src={img4} className="card-img-top" alt="..."/>
             <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><h5 className="langs">HTML</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="cssimg" src={img5} className="card-img-top" alt="..."/>
             <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><h5 className="langs">CSS</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="javascriptimg" src={img6} className="card-img-top" alt="..."/>
             <a href='https://developer.mozilla.org/en-US/docs/Web/javascript'><h5 className="langs">JavaScript</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="reactimg" src={img7} className="card-img-top" alt="..."/>
             <a href='https://legacy.reactjs.org/docs/getting-started.html'><h5 className="langs">ReactJS</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="mysqlimg" src={img8} className="card-img-top" alt="..."/>
             <a href='https://dev.mysql.com/doc/'><h5 className="langs">MySQL</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="djangoimg" src={img9} className="card-img-top" alt="..."/>
             <a href='https://docs.djangoproject.com/en/4.2/'><h5 className="langs">Django</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="nodejsimg" src={img10} className="card-img-top" alt="..."/>
             <a href='https://nodejs.org/en/docs'><h5 className="langs">NodeJs</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="expressjsimg" src={img11} className="card-img-top" alt="..."/>
             <a href='https://expressjs.com/'><h5 className="langs">ExpressJs</h5></a>
              </div>
              <div className="col-sm-4" id="card1">
              <img id="mongoDBimg" src={img12} className="card-img-top" alt="..."/>
             <a href='https://www.mongodb.com/docs/'><h5 className="langs">MongoDB</h5></a>
              </div>
              
              
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Skills;
