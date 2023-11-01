import '../../styles/Congratulations.scss';
import cat from '../../assets/cat.svg';
import dog from '../../assets/dog.svg';
import encouragingTurtle from '../../assets/EncouragingTurtle-Solo.svg';
import speechBubble from '../../assets/speechBubble.svg';
import penPalsLogo from '../../assets/turtleLogo.svg';

function CongratsPage(): JSX.Element {
  return (
    <section id="congrats-page-container">
      <div>
        <div id="turtle-logo">
          <img
            src={penPalsLogo}
            alt="Small turtle, part of the TeachLA logo"
            id="turtle-image"
          />
          <div id="turtle-logo-text">Pen Pals</div>
        </div>

        <div className="speech-bubble">
          <img
            src={speechBubble}
            alt="Small turtle, part of the TeachLA logo"
            id="speech-bubble-image"
          />
          <div id="congratsTxt">CONGRATULATIONS!</div>
          <div id="blurb">
            You have come out of your shell and learned the basics of Turtle.{' '}
          </div>
        </div>
      </div>

      <div id="encouraging-turtle-congratulations">
        <img src={encouragingTurtle} alt="turtle image" id="turtle-picture" />
      </div>

      <div id="next">
        <div id="tryNext">Try these next!</div>
        <div id="rectangle1">
          <img src={cat} alt="cat image" id="cat-img" />
        </div>

        <div id="rectangle2">
          <img src={dog} alt="dog image" id="dog-img" />
        </div>
      </div>
    </section>
  );
}

export default CongratsPage;
