import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';

const ProjectTiles = (props) => {
  return (
  	<Container className='container'>
    <p className="">
	    <h1 className="text-title">PROJEKTY</h1>
	  </p>
    <Row className="cardList">
     <Col sm="4">
      <Card>
        <CardImg top width="100%" src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.0-9/26991818_438095426606239_455545474117606159_n.jpg?_nc_cat=101&_nc_ht=scontent.fwaw3-2.fna&oh=a3c757544a80fbd41ab16e5b0df9765f&oe=5D475B1D" alt="Card image cap" />
        <CardBody>
          <CardTitle><h2 className="text-subtitle">Stalker ZONA X</h2></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText><p className="text-plain">Nadchodząca edycja WIĘCEJ MOCNIEJ LEPIEJ SZYBCIEJ TAK w oscarowej lokalizacji GWIAZDY LANS ZIMNE PIWO powiedz znajomym!</p></CardText>
          <Button>WIĘCEJ</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
            <Card>
        <CardImg top width="100%" src="https://i.ibb.co/BnvXkyF/562-934x.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><h2 className="text-subtitle">Piołun: Strefa Zero</h2></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText className="text-plain">Piołun: Strefa Zero to autorski projekt inspirowany klasyką gatunku: grą planszową Talisman i książką “Piknik na skraju drogi”. </CardText>
          <Button>WIĘCEJ</Button>
        </CardBody>
      </Card>
       </Col>
       <Col sm="4">
            <Card>
        <CardImg top width="100%" src="https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.0-9/51377826_1009347649265482_8500695612654616576_n.png?_nc_cat=102&_nc_ht=scontent.fwaw3-2.fna&oh=1eaed461d788c0756b767fc3e950c050&oe=5D4BCF1C" alt="Card image cap" />
        <CardBody>
          <CardTitle><h2 className="text-subtitle">Strefa Na Skraju Nysy</h2></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText className="text-plain"> Zona jest niebezpieczna i nieprzewidywalna, ale posiadamy tutaj swój bezpieczny kąt. To własnie Strefa na skraju Nysy.</CardText>
          <Button>WIĘCEJ</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    </Container>
  );
};

export default ProjectTiles;