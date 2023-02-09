import React from "react";
import Button from 'react-bootstrap/Button';

export default function Bgi() {
    return (
        <div className="bgText">
            {/* <img src="../assets/Linkedin carousel.jpg"/> */}
            <h1 className="heading">Create SEO friendly</h1>
            <h2 className="subHeading">Linkedin Posts</h2>
            <br></br>
          
            <h4>Get followers, leads, reach without the effort of writing!</h4>

            <br></br>

            <Button variant="danger" size="lg" href="/LinkedinCreator">
                Create Now!
            </Button>

            <br></br>
            <hr></hr>
        </div>
    )
}