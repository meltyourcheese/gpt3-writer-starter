import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react";
function GenerateTopics() {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log("Calling OpenAI...");
    const response = await fetch("/api/GenerateTopicAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...");

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    // console.log(userInput);
  };

  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div>
      <br></br>
      <h2 className="m-3" style={{ textAlign: "center" }}>
        Generate Topics for your ideas
      </h2>
      <Form className="m-3 gtform mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <b className="mx-auto">Enter your Idea/thought</b>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Example: My journey to Investments and Stock Markets"
            value={userInput}
            onChange={onUserChangedText}
          />
        </Form.Group>
        <Button className="GenerateTopicButton" variant="primary" onClick={callGenerateEndpoint}>
          {isGenerating ?  <Spinner animation="grow" variant="light" className="my-auto mx-auto" /> :  <h6 className="my-auto">Get topics</h6>}
          
        </Button>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Topics </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
          />
        </Form.Group> */}
      </Form>
      <div className="gtform mx-auto ">
        {apiOutput && (
          <div className="output m-3 topicList p-2 gt-form mx-auto">
            <div className="output-header-container">
              <div className="output-header">
                {/* <h5>Topics</h5> */}
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

export default GenerateTopics;
