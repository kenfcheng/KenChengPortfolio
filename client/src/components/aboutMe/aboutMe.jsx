import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns'
import photo from "../../img/kenPhoto.jpg";


function aboutMe() {
    return (
        
    <CardGroup>
        <CardColumns>
    <Card>
      <Card.Title className="header-white-text">About Me</Card.Title>
        <Card.Text className="container-white-text">
          A North Carolina native, I got my Bachelor's degree in English
          from UNC Greensboro. Most of my professional career has been
          working in food service but I've also has the opportunity to write
          for a local newspaper and for a local news station. During the
          early days of the Covid pandemic, the company I worked for did
          mass layoffs and I found myself without a job. I decided to take
          that as an opportunity for a career change and decided to go down
          the path of becoming a full-stack developer.
          </Card.Text>
      </Card>
     </CardColumns>
     </CardGroup>

     
    
    )
}

export default aboutMe

