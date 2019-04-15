import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';

const Patronaty = (props) => {
  return (
    <Container className='container'>
      <p>
	   <h1 className="text-title">PATRONUJEMY</h1>
	  </p>
	  <Row className="patronaty">
	   <Col sm="10">
      	<Card>
	      <CardImg top width="100%" src='http://nyskon.pl/wp-content/uploads/2019/02/Nyskon-net-banner.png' alt="Card image cap" />
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