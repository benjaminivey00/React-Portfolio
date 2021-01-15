import { Container, Row, Image } from 'react-bootstrap';

const Homepage = () => {
  return (
    <>
      <Container className="section navbar-dark mt-4 p-4">
        <Row className="px-3">
          <h1 className="m-auto">About Me</h1>
        </Row>
        <Row className="px-3">
          <hr />
        </Row>
        <div>
          <p>
          I don’t have any coding experience before graduating the UofU bootcamp right after getting through highschool. I see this as an advantage, it shows that I am a fast learner and a very hard worker. I know I have great work ethic because I have always had 2 jobs or balanced work and education. I have strong communication and collaboration skills so I work well in a team. 
In pursuit of becoming a Full Stack Web Developer, strong skills include, HTML, CSS, JavaScript, JQuery, express, Mysql, Node, MongoDB, mongoose, React, Communication, Collaboration and Teamwork
          </p>
          
          <p>
            My passion is problem solving and finding efficient solutions to daily problems.
          </p>
        </div>
      </Container>
    </>
  );
}
export default Homepage;