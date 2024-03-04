import { Col, Container, Row, Card, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
   return (
      <div>
         <Container>
         <br></br>
         <br></br>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <Row>
               <Col md={4} className="movieWrapper" id="trending">
                  <Card className="movieImage">
                     <Image src={duneImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Dune</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                  <Card className="movieImage">
                     <Image src={everythingImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Everithing</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                  <Card className="movieImage">
                     <Image src={infiniteImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Infinite</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                  <Card className="movieImage">
                     <Image src={jokerImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Joker</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                  <Card className="movieImage">
                     <Image src={lightyearImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Light year</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                  <Card className="movieImage">
                     <Image src={morbiusImage} alt="dune" className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">Morbius</Card.Title>
                           <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                     </div>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Trending;
