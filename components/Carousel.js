import Carousel from 'react-bootstrap/Carousel';
import cimage from '../assets/Linkedin carousel.jpg'
function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fgradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg%3Fauto%3Dformat%26h%3D200&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Flinkedin-banner&tbnid=tnsmfaXdKogeUM&vet=12ahUKEwjEm-762vv8AhVhluYKHerjDgwQMygDegUIARDlAQ..i&docid=vCa8bITnNeOwTM&w=601&h=200&q=linkedin%20image%20for%20background&ved=2ahUKEwjEm-762vv8AhVhluYKHerjDgwQMygDegUIARDlAQ"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

        
      </Carousel.Item>
      
      <div>
      <img
          src="../assets/Linkedin carousel.jpg"
        />
      </div>
    </Carousel>
  );
}

export default CarouselHome;