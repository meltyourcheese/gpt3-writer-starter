import Card from 'react-bootstrap/Card';

function Features() {
  return (
    <div className='Features'> 
        <Card
          bg='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title className='FeaturesContent'> Be Engaging </Card.Title>
            <Card.Text className='FeaturesContent'>
                Write content that goes viral on LinkedIn 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body >
            <Card.Title className='FeaturesContent'> Be Resourceful </Card.Title>
            <Card.Text className='FeaturesContent' >
                Never face the writer’s <br></br>BLOCK ever!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          bg='light'
          style={{ width: '18rem' }}
          className="m-4"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title className='FeaturesContent'> Be Creative </Card.Title>
            <Card.Text className='FeaturesContent'>
                Never run out of 
                <br></br>
                CONTENT IDEAS!
            </Card.Text>
          </Card.Body>
        </Card>
      
        
    </div>
  );
}

export default Features;