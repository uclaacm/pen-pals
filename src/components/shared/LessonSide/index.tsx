import '../../../styles/LessonSide.scss';
import LevelSelector from './LevelSelector';

function LessonSide(): JSX.Element {
  return (
    <section id="lesson-side-container">
      some stuff
      {/* don't change this next line */}
      <LevelSelector items={5} current={2} />
    </section>
  );
}

export default LessonSide;
