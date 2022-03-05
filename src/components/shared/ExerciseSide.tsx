import '../../styles/ExerciseSide.scss';
import AxisExercise from './Exercises/AxisExercise';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        <AxisExercise
          orientation="horizontal"
          markers={[-2, -1, 0, 1, 2]}
          labels={['A', '', '', 'B', 'C']}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
