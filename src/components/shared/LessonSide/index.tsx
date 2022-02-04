import '../../../styles/LessonSide.scss';
import LevelSelector from './LevelSelector';

function LessonSide(): JSX.Element {
  return (
    <section id="lesson-side-container">
      some stuff
      {/* don't change this next line */}
      <LevelSelector numLevels={5} currentLevel={2} maxLevelReached={4} />
    </section>
  );
}

export default LessonSide;
