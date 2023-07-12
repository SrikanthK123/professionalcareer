import React from "react";


const Achievements = () => {
   
      
  return (
    <>
      <div className="Achievements">
        <div className="AchievementsTitle">
          <h4>Achievements</h4>
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
                  id="Achievesid"
                >
                  TCS CodeVita Season
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
                <i className="fas fa-certificate"></i> 
                  <strong>  TCS CodeVita Season-10 Certificate</strong> <span className="year">(2022)</span>.
                  <br />  I have participated in TCS CodeVita Season-10, one of
                  the most challenging coding competitions and honed my
                  technical skills and problem solving skills.
                  
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
                  id="Achievesid"
                >
                  TCS National Qualifier Test
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <i className="fas fa-certificate"></i> 
                  <strong>
                  TCS National Qualifier Test (TCS NQT) - Cognitive
                  </strong> <span className="year">(2023)</span>.
                  <br />
                  I have participated in TCS NQT, and got 71% in the competition.
                </div>
              </div>
            </div>
          </div>
          <a href="/about"><button className="backbtn"id="BtnAchieve" >Back</button></a>
        </div>
      </div>
    </>
  );
};

export default Achievements;
