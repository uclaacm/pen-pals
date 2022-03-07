import '../styles/Congratulations.scss';
import Cat from '../assets/cat.svg';
import Dog from '../assets/dog.svg';
import EncouragingTurtle from '../assets/encouraging-turtle.svg';
import Header from '../assets/header.svg';
import SpeechBubble from '../assets/speech-bubble.svg';

function Congratulations(): JSX.Element {
  return (
    <div>
      <section id="congratulations-container">
        <img id="header" src={Header} />
        <img id="speech-bubble" src={SpeechBubble} />
        <img id="encouraging-turtle" src={EncouragingTurtle} />
        <img id="cat" src={Cat} />
        <img id="dog" src={Dog} />
        <div id="congratulations-text">
          CONGRATULATIONS!
        </div>
      </section>
    </div>
  );
}

export default Congratulations;