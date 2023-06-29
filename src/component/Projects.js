import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  ////  Used for Slice the Description
  /*const description1 = `Made a website that helps students to stay-on date with college.
  I’ve used HTML, CSS, bootstrap for frontend, Django as backend and
  SQLite for database. The website covers. Everything from on campus
  information events, circulars, schedules only visible after login
  and off campus information such as events, placements, courses and
  other student centric information can be viewed by everyone.`
  const SliceDesc1 = description1.slice(0,205)
  const description2 = `Created an application to Authenticate and Validate Products and
  Certificates using Blockchain, to tackle against the rising tide
  of counterfeit products and ingenuine certificates. The
  application helps to fight against them by storing the products
  and certificates id’s on Blockchain, as the ledger can be only
  updated by authorized persons, no one can hack it and modify the
  data that is stored.`
  const SliceDesc2 = description2.slice(0,210)*/
  return (
    <>
    <h4 className="projectTitle">Projects</h4>
    
    <div className="row">
   
      <div className="col-sm-4">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">
              A Website that serves students to stay on-date with college.
            </h5>
            <p className="card-text">
              Made a website that helps students to stay-on date with college.
              I’ve used HTML, CSS, bootstrap for frontend, Django as backend and
              SQLite for database. The website covers. Everything from on campus
              information events, circulars, schedules only visible after login
              and off campus information such as events, placements, courses and
              other student centric information can be viewed by everyone.
            </p>
            <Link to="#" className="ProjectLink">
              <button className="Projectbtn">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">
              Authentication and Validation of products and certificate using
              Blockchain
            </h5>
            <p className="card-text">
              Created an application to Authenticate and Validate Products and
              Certificates using Blockchain, to tackle against the rising tide
              of counterfeit products and ingenuine certificates. The
              application helps to fight against them by storing the products
              and certificates id’s on Blockchain, as the ledger can be only
              updated by authorized persons, no one can hack it and modify the
              data that is stored.
            </p>
            <Link to="#" className="ProjectLink">
              <button className="Projectbtn">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
