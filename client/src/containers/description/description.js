import React from "react";

function description() {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h4>Experience</h4>
          <div className="row">
            <div className=" col-12">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">code</i>
                </h2>
                <h5 className="center">Front End</h5>

                <p className="light">
                  Experienced in HTML, CSS, Javascript. I am familiar with
                  various CSS frameworks like Boostrap, Materialize,
                  Skeletonize. As well as Javascript libraries like JQuery and
                  React.
                </p>
              </div>
            </div>

            <div className=" col-12">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">sync_alt</i>
                </h2>
                <h5 className="center">Back End</h5>

                <p className="light">
                  My server side scripting experience are in frameworks such as
                  Nodejs as well as using database systems such as mySQL,
                  Mongodb, and Sequelize. Other back end-related experience
                  includes: Passport, routing, and ORM.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">laptop</i>
                </h2>
                <h5 className="center">Content Writer</h5>

                <p className="light">
                  I have experience in writing content for newspapers, blogs,
                  and websites. A sample of some of my work can be found
                </p>
                <a href="#" download className="col-12 center">
                  <button type="button" className="btn s12 m4">
                    Writing Sample
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default description;
