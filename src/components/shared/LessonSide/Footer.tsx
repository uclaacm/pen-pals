import TeachLALogo from '../../../assets/teach-la-logo.svg';
import WhiteHeart from '../../../assets/whiteHeart.svg';
import '../../../styles/Footer.scss';

function Footer(): JSX.Element {
  return (
    <div id="footer">
      <h3>
        made with{'  '}
        <img id="white-heart" src={WhiteHeart} alt="A white heart" />
        {'   '}
        by
        <a
          href="https://teachla.uclaacm.com"
          target="_blank"
          rel="noopener noreferrer"
          id="footer-link"
        >
          {'  '}
          <img id="tla-logo" src={TeachLALogo} alt="teach la logo!" />
          acm.teachLA
        </a>
      </h3>
    </div>
  );
}

export default Footer;
