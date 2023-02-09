import React from "react";
import NavbarTop from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GenerateTopics from "../components/LinkedinUseCases/GenerateTopics";
import GeneratePost from "../components/LinkedinUseCases/GeneratePost";
import ImprovePost from "../components/LinkedinUseCases/ImprovePost";

export default function LinkedinCreate() {
  return (
    <div>
      <NavbarTop />
      <div className="LinkedinCreateSection">
        <h1>What do you want to do?</h1>
        <br></br>
        <div className="LinkedinOptions">
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text className="LinkedinOptionsText">
                Generate Topics/Ideas content
              </Card.Text>
              <Button variant="primary">Use</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text className="LinkedinOptionsText">
                Write Linkedin post with AI
              </Card.Text>
              <Button variant="primary">Use</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
            <Card.Body>
              {/* <Card.Title>Improve your post</Card.Title> */}
              <Card.Text className="LinkedinOptionsText">
                Improve your post
              </Card.Text>

              <Button variant="primary" href="/AboutUs">Use</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <GenerateTopics/>
      <GeneratePost/>
      <ImprovePost/>
    </div>
  );
}
