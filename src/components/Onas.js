import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Col, Row } from 'reactstrap';

const Onas = () => {
 return (
    <Container className='container'>
     <Row>
      <Col sm="12">
	     <h2 className="text-title text-dark ralign">PIOŁUN</h2>
       
<blockquote class="blockquote text-left">
  <p class="mb-0 text-subtitle h4">&bdquo;I spadła z nieba wielka gwiazda, płonąca jak pochodnia, a spadła na trzecią część rzek i na źródła wód.<br/>A imię gwiazdy zowie się Piołun.&rdquo;</p>
  <footer class="blockquote-footer text-right"><cite title="Source Title" className="text-subtitle text-dark h5">Apokalipsa 8, 10:11</cite></footer>
</blockquote>

       <h4 className="text-plain ralign">
	   	     Strefa Piołun to Stowarzyszenie maniaków science fiction, w jego dystopijno-apokaliptycznych odsłonach. Działamy od 2018, organizując fabularne gry terenowe spod znaku kałasznikowa i atomu. Aktywnie animujemy środowiska graczy i twórców, podzielajacych tak różnorodne pasje jak industrial, militaria czy kultura słowiańska.
        </h4>
	  </Col>	
	 </Row>
	 </Container>
  	);
  };

  export default Onas;