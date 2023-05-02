import '../../../styles/LessonSide.scss';
import penPalsLogo from '../../../assets/turtleLogo.svg';
import Footer from './Footer';
import LevelSelector from './LevelSelector';
import Turtle from './Turtle';
import LessonText from './LessonText';


let exArray: {id: string, text: string}[] = 
[
  {"id": "lesson-side-header", "text": "Positioning of Computers"},
  {"id": "lesson-side-body", "text": "In order to tell computers where to move the cursor, we have to use the coordinate system. The coordinate system is a grid with lots of small chunks, called units. To figure out where to move, the cursor uses its starting point at the center of the grid and counts out some number of units. For example, the point (2, 1) would be two units RIGHT and one unit UP from the center."},
  {"id": "lesson-side-body", "text": "When looking at these numbers, remember that the number to move sideways comes first. A positive number means you move right, and a negative number means you move left. And when moving up and down with the second number, a positive number means you move up and a negative means down."}
]


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
        <LessonText text_array={exArray}/>
      </div>
      <div>
        <Turtle turtleID="your-genius" />

        {/* don't change this next line */}
        <LevelSelector numLevels={5} currentLevel={2} maxLevelReached={4} />
      </div>
      <Footer />
    </section>
  );
}

export default LessonSide;  