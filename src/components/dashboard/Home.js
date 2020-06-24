import React from 'react';
import { Card, CardImg, CardText, CardBody,CardDeck,CardTitle, CardImgOverlay,CardSubtitle, Row, Col, Button} from 'reactstrap';



function RenderCard(props){
   
        return(
            
            <Col sm="3">
              <Card body>
                <CardTitle>
                    Categories
                </CardTitle>
                <CardText>2</CardText>
                <Button>More Info</Button>
              </Card>
            </Col>
          
        );
    }
   


function Home(props){

    return(
        <div className="container">
        
                <Row id = "home">
                    <RenderCard ></RenderCard>
                    <RenderCard ></RenderCard>
                    <RenderCard ></RenderCard>
                    <RenderCard ></RenderCard>
                </Row>
           
        </div>
    );
}

export default Home;