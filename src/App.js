import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import'./App.css';
function IndividualIntervalsExample() {
  return (
    <><Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 hs"
          src="https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 hs"
          src="https://c4.wallpaperflare.com/wallpaper/958/62/503/cool-hd-wallpaper-preview.jpg"
          alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hs"
          src="https://i.pinimg.com/originals/41/9d/c6/419dc691afb57e52c61981f4b3a64931.jpg"
          alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel><Row xs={1} md={4} className="g-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://i.pinimg.com/736x/2a/76/17/2a761787715ca71788aad1a28ab057ac--white-wallpaper-wallpaper-for.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <DropdownButton
        as={ButtonGroup}
        title="Aksi"
        id="bg-success-dropdown-1"
        variant='success'
      >
        <Dropdown.Item eventKey="1">Aksi 1</Dropdown.Item>
        <Dropdown.Item eventKey="2">Aksi 2</Dropdown.Item>
      </DropdownButton>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row></>




  );
}

export default IndividualIntervalsExample;