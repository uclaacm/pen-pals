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

function LessonSide({ levelNum, updateLevel, maxLevel }: lessonSideProps): JSX.Element {
  const lesson_info = LessonSideContent[levelNum] || [];
  // console.log("max:" + maxLevel);
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
        <LessonText text_array={lesson_info} />
      </div>
      <div>
        <Turtle turtleID="your-genius" />

        {/* passed from parent component */}
        <LevelSelector
          numLevels={6}
          currentLevel={levelNum}
          maxLevelReached={maxLevel}
          updateLevel={updateLevel}
        />
      </div>
      <Footer />
    </section>
  );
}

export default LessonSide;
