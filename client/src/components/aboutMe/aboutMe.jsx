import React from 'react';
 import {Container, Row, Col} from 'react-bootstrap';
// import CardGroup from 'react-bootstrap/CardGroup';
// import CardColumns from 'react-bootstrap/CardColumns'
// import CardDeck from 'react-bootstrap/CardDeck'
import photo from "../../img/kenPhoto.jpg";
import "./aboutMe.css";


function aboutMe() {
    return (
        
    <Container>
    <Row>
        
       <Col>
          <img
            src={photo}
            alt="KenPhoto"
            style={{ height: 375, width: 500 }}
          />
        </Col>

        <Col>
          <h5 className="header-white-text">A Brief History</h5>
          <p className="container-white-text">
            A North Carolina native, I got my Bachelor's degree in English
            from UNC Greensboro. Most of my professional career has been
            working in food service but I've also has the opportunity to write
            for a local newspaper and for a local news station. During the
            early days of the Covid pandemic, the company I worked for did
            mass layoffs and I found myself without a job. I decided to take
            that as an opportunity for a career change and decided to go down
            the path of becoming a full-stack developer.
          </p>
          </Col>
      </Row>
      </Container>
   
     
    
    )
}

export default aboutMe

