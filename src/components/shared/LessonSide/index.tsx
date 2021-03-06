import '../../../styles/LessonSide.scss';
import encouragingTurtle from '../../../assets/EncouragingTurtle.svg'; // <3 encouraging turtle
import penPalsLogo from '../../../assets/turtleLogo.svg';
import Footer from './Footer';
import LevelSelector from './LevelSelector';

function LessonSide(): JSX.Element {
  return (
    <section id="lesson-side-container">
      <div>
        <div id="turtle-logo">
          <img
            src={penPalsLogo}
            alt="Small turtle, part of the TeachLA logo"
            id="turtle-image"
          />
          <div id="turtle-logo-text">Pen Pals</div>
        </div>
        <div id="lesson-side-header">Positioning in Computers</div>
        <div id="lesson-side-body">
          In order to tell computers where to move the cursor, we have to use
          the coordinate system. The coordinate system is a grid with lots of
          small chunks, called units. To figure out where to move, the cursor
          uses its starting point at the center of the grid and counts out some
          number of units. For example, the point (2, 1) would be two units
          RIGHT and one unit UP from the center.
        </div>
        <div id="lesson-side-body">
          When looking at these numbers, remember that the number to move
          sideways comes first. A positive number means you move right, and a
          negative number means you move left. And when moving up and down with
          the second number, a positive number means you move up and a negative
          means down.
        </div>
      </div>
      <div>
        <img
          src={encouragingTurtle}
          alt='Turtle saying "You can do it!"'
          id="encouraging-turtle"
        />

        {/* don't change this next line */}
        <LevelSelector numLevels={5} currentLevel={2} maxLevelReached={4} />
      </div>
      <Footer />
    </section>
  );
}

export default LessonSide;
