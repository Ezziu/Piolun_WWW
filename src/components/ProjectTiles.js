import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';

const ProjectTiles = (props) => {
  return (
  	<Container className='container'>
    <p>
	    <h1>Nasze Projekty</h1>
	  </p>
    <Row className="cardList">
     <Col sm="4">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Stalker ZONA X</CardSubtitle>
          <CardText>Lorem ipsum</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
            <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Piołun: Strefa Zero</CardSubtitle>
          <CardText>Lorem ipsum</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
       </Col>
       <Col sm="4">
            <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Strefa Na Skraju Nysy</CardSubtitle>
          <CardText>Lorem ipsum</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    </Container>
  );
};

export default ProjectTiles;