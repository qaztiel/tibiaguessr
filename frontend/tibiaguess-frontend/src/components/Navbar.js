import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandBar() {
  return (
    <>
      {/* <Navbar>
        <Container>
          <Navbar.Brand href="#home">Tibiaguessr</Navbar.Brand>
        </Container>
      </Navbar> */}
      <nav>
        <div className='nav--social--wrapper'>
          <i class='fa-brands fa-github fa-2x'></i>
          <i class='fa-brands fa-tiktok fa-2x'></i>
          <i class='fa-brands fa-instagram fa-2x'></i>
          <i class='fa-brands fa-twitter fa-2x'></i>
        </div>
        <div className='nav--items'>
          <div className='logo'></div>
          <h1 className='nav--title'>Tibiaguessr</h1>
        </div>
        <div></div>
      </nav>
    </>
  );
}

export default BrandBar;
