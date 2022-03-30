import '../styles/Congratulations.scss';
import Cat from '../assets/cat.svg';
import Dog from '../assets/dog.svg';
import EncouragingTurtle from '../assets/encouraging-turtle.svg';
import Header from '../assets/header.svg';
import SpeechBubble from '../assets/speech-bubble.svg';

function Congratulations(): JSX.Element {
  return (
    <div>
      <section id="congratulations-bg">
        <section id="congratulations-container">
          <img id="header" src={Header} />
          <div id="speech-bubble-container">
            <img id="speech-bubble" src={SpeechBubble} />
            <div id="congratulations-text">
              CONGRATULATIONS!
            </div>
            <img id="encouraging-turtle" src={EncouragingTurtle} />
          </div>
          <div id="dog-cat-box">
            <div id="animals-text">
              Try these next!
            </div>
            <div id="cat-box">
              <img id="cat" src={Cat} />
            </div>
            <div id="dog-box">
              <img id="dog" src={Dog} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Congratulations;