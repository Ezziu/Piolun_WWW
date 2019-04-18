import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';

const Patronaty = (props) => {
  return (
    <Container className='container'>
      <p>
	   <h2 className="text-title lalign">PATRONUJEMY</h2>
	  </p>
	  <Row className="patronaty-content">
	   <Col sm="8">
      	<Card>
	      <CardImg top width="100%" src='http://nyskon.pl/wp-content/uploads/2019/02/Nyskon-net-banner.png' alt="Card image cap" href="https://www.facebook.com/nyskon/" />
	      <CardBody>
	        <CardTitle></CardTitle>
	        <CardSubtitle></CardSubtitle>
	        <CardText></CardText>
	       </CardBody>
        </Card>
       </Col>
      </Row> 
    </Container>
  );
};

export default Patronaty;