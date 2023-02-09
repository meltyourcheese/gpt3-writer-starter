import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react";
function GeneratePost() {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {

    setIsGenerating(true);
    console.log("Calling OpenAI...");
    const response = await fetch("/api/GeneratePostAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    console.log(`${output.text}`);
  };

  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div>
      <h2 className="m-3" style={{ textAlign: "center" }}>
        Generate Linkedin Post for your Topic
      </h2>
      <Form className="m-3 gtform mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><b>Enter your Topic</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Example: My journey to Investments and Stock Markets"
            value={userInput}
            onChange={onUserChangedText}
          />
        </Form.Group>
        <Button variant="primary" onClick={callGenerateEndpoint}>
          {isGenerating ?  <Spinner animation="grow" variant="light" className="my-auto mx-auto" /> :  <h6 className="my-auto">Get Post</h6>}
        </Button>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Topics </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
          />
        </Form.Group> */}
      </Form>
      <div className="gtform mx-auto">
        {apiOutput && (
          <div className="output m-3 topicList p-2 gt-form mx-auto">
            <div className="output-header-container">
              <div className="output-header">
                {/* <h3>Post</h3> */}
              </div>
            </div>
            <div className="output-content">              
              <p>{apiOutput}</p>
            </div>
          </div>
        )}
      </div>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
}

export default GeneratePost;
