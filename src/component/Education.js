import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';


const Education = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="nameTitle">
          <h4 className="edutitle" id="EducationaTitle">Educational Details</h4>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  id="Accordion"
                >
                  Under Graduation
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                className="EduDetail1"
              >
                <div class="accordion-body">
               <i class="fa fa-graduation-cap" aria-hidden="true"></i> - <strong> Bachelor of Technology - 2022</strong><br/> I've
                  completed my bachelor's degree in Computer Science and
                  Engineering at Aurora’s Technological & Research Institute,
                  Hyderabad <span className="year">(Batch of 2022)</span>.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  id="Accordion"
                >
                Intermediate 
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <i class="fa fa-university" aria-hidden="true"></i> - <strong>Completion of Board of Intermediate Public Examination-2018</strong> <br/>
                I've
                  completed my Higher Secondary School Certificate (HSSC) in Maths, Physics and Chemistry (MPC) at Sri Chaitanya Junior Kalasala <span className="year">(2018)</span>.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  id="Accordion"
                >
                  	School  
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <i className="fas fa-school"></i> - <strong>  Completion of Board of Secondary School Certificate - 2016 </strong><br/>
                  I've
                  completed my  Secondary School Certificate (SSC) at Care Model High School <span className="year">(2016)</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/about"><button className="backbtn" id="Btnid" >Back</button></a>
      </div>
    </div>
  );
};

export default Education;
