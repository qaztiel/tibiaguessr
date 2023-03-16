import '../style/Footer.css'
import { Github, Twitter, Tiktok, Instagram, Discord } from 'react-bootstrap-icons';


function Footer() {
  
  return (
    <>
      <footer id='footer'>
        <div id='socials'>
          <a href='https://www.github.com/qaztiel/tibiaguessr'>
            <Github size={'26'} />
          </a>
          <a href='https://www.twitter.com/tibiaguessr'>
            <Twitter size={'26'} />
          </a>
          <a href='https://www.tiktok.com/@tibiaguessr'>
            <Tiktok size={'26'} />
          </a>
          <a href='https://www.instagram.com/tibiaguessr'>
            <Instagram size={'26'} />
          </a>
          <a href='https://discord.com/invite/FuEKaqNZTf'>
            <Discord size={'26'} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
