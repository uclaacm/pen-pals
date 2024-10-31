import '../../../styles/LessonSide.scss';
import penPalsLogo from '../../../assets/turtleLogo.svg';
import Footer from './Footer';
import * as LessonSideContent from './LessonSideContent.JSON';
import LessonText from './LessonText';
import LevelSelector from './LevelSelector';
import Turtle from './Turtle';

interface lessonSideProps {
  levelNum: number;
  updateLevel: (newCount: number) => void;
  maxLevel: number;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function LessonSide({
  levelNum,
  updateLevel,
  maxLevel,
}: lessonSideProps): JSX.Element {
  const lesson_info = LessonSideContent[levelNum] || [];
  const randomTurtleMessage = getRandomNumber(1, 7);
  // console.log("max:" + maxLevel);
  return (
    <section id="lesson-side-container">
      <div id="lesson-text">
        <div id="turtle-logo">
          <img
            src={penPalsLogo}
            alt="Small turtle, part of the TeachLA logo"
            id="turtle-image"
          />
          <div id="turtle-logo-text">Pen Pals</div>
        </div>
        <LessonText text_array={lesson_info} />
      </div>
      <div id="lesson-interactive">
        <div id="turtle-and-level-selector">
          <Turtle turtleID={randomTurtleMessage} />

          {/* passed from parent component */}
          <LevelSelector
            numLevels={6}
            currentLevel={levelNum}
            maxLevelReached={maxLevel}
            updateLevel={updateLevel}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default LessonSide;
