import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';

const Patronaty = (props) => {
  return (
    <Container className='container'>
      <p>
	   <h1>Patronujemy</h1>
	  </p>
	  <Row className="patronaty">
	   <Col sm="8">
      	<Card>
	      <CardImg top width="100%" src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=720&h=360' alt="Card image cap" />
	      <CardBody>
	        <CardTitle>Nyskon 2019</CardTitle>
	        <CardSubtitle>Strefa Nysa</CardSubtitle>
	        <CardText>Ale fajnie, fajniście, fajniusio!</CardText>
	        <Button>Button</Button>
	      </CardBody>
        </Card>
       </Col>
      </Row> 
    </Container>
  );
};

export default Patronaty;