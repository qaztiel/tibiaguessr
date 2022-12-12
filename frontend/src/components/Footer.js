import '../style/Footer.css'
import { Github, Twitter, Tiktok, Instagram, Git } from 'react-bootstrap-icons';


function Footer() {
  
  return (
    <>
      <footer id='footer'>
        <div id='socials'>
          <a href='https://www.github.com/qaztiel/tibiaguessr'>
            <Github/>
          </a>
          <a href='https://www.twitter.com/tibiaguessr'>
            <Twitter/>
          </a>
          <a href='https://www.tiktok.com/@tibiaguessr'>
            <Tiktok/>
          </a>
          <a href='https://www.instagram.com/tibiaguessr'>
            <Instagram/>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
