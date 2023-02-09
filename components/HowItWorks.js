import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function HIW() {

  return (
    <div className="stepsBox">
      <h2 className="m-3" style={{textAlign:"center"}}>How It Works?</h2>
      
      <Card
        bg="light"
        style={{ width: '18rem' }}
        className="stepsBox mx-auto mb-4"
      >
        <Card.Header>Step #1</Card.Header>
        <Card.Body>
          {/* <Card.Title> Card Title </Card.Title> */}
          <Card.Text>
          Enter the topic in the TOPIC GENERATOR and the AI Engine will generate 5 content ideas for you.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="light"
        style={{ width: '18rem' }}
        className="stepsBox mx-auto mb-4"
      >
        <Card.Header>Step #2</Card.Header>
        <Card.Body>
          {/* <Card.Title> Card Title </Card.Title> */}
          <Card.Text>
          Choose one idea from STEP 1 and enter it in “Write LinkedIn post with AI” section.Voila! Your post will be ready!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="light"
        style={{ width: '18rem' }}
        className="stepsBox mx-auto mb-4"
      >
        <Card.Header>Step #3</Card.Header>
        <Card.Body>
          {/* <Card.Title> Card Title </Card.Title> */}
          <Card.Text>
          If you want to further improve the LinkedIn post generated or if you have a pre-written LinkeIn post, then enter it in “Improve LinkedIn post” section.
          <br></br>
          Boom! You’re done!
          </Card.Text>
        </Card.Body>
      </Card>
    

      <br></br>

      <div className = "mx-auto HIWcreate ">
        <Button variant="danger" size="lg" href="/LinkedinCreator">
          Create Now!
        </Button>
      </div>
      
    </div>
    
  )
  
}
