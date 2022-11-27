import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function BrandBar() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Tibiaguessr</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandBar;