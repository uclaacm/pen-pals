import '../../styles/Congratulations.scss';
import encouragingTurtle from '../../assets/EncouragingTurtle-Solo.svg';
import speechBubble from '../../assets/speechBubble.svg';
import penPalsLogo from '../../assets/turtleLogo.svg';

function CongratsPage(): JSX.Element {
  return (
    <section id="congrats-page-container">
      <div id="congrats-turtle-logo">
        <img
          src={penPalsLogo}
          alt="Small turtle, part of the TeachLA logo"
          id="turtle-image"
        />
        <div id="turtle-logo-text">Pen Pals</div>
      </div>
      <div className="congrats-speech-and-turtle-container"></div>
      <div className="congrats-speech-turtle-container">
        <div className="speech-bubble">
          <img
            src={speechBubble}
            alt="Small turtle, part of the TeachLA logo"
            id="speech-bubble-image"
          />
          <div className="congrats-text">
            <h1 id="congratsHeader">CONGRATULATIONS!</h1>
            <p>
              You learned about Python’s turtle library, where you can use
              commands such as goto, forward, left, and right to draw lines.
              Now, you can use these skills to create your own drawings and
              graphics using code!
            </p>
            <div className="congrats-links">
              <h2 id="congrats-links-header">
                Check out our other websites to learn more!
              </h2>
              <a href="https://parcel-pointers.netlify.app/">
                <u>Parcel Pointers</u>
              </a>
              <br />
              <a href="https://boolbots.uclaacm.com/">
                <u>Bool Bots</u>
              </a>
              <br />
              <a href="https://tuxs-great-adventure.netlify.app/">
                <u>Tux&apos;s Great Adventures</u>
              </a>
            </div>
          </div>
        </div>
        <div id="encouraging-turtle-congratulations">
          <img src={encouragingTurtle} alt="turtle image" id="turtle-picture" />
        </div>
      </div>
    </section>
  );
}

export default CongratsPage;
