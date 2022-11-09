import '../../styles/ExerciseSide.scss';
import AxisExercise from './Exercises/AxisExercise';
('./Exercises/AxisExercise');
import UnitCircleExercise from './Exercises/UnitCircleExercise';

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        <AxisExercise
          orientation="horizontal"
          markers={[-2, -1, 0, 1, 2]}
          labels={['A', '', '', 'B', 'C']}
          turtlePosition={1}
        />
        <UnitCircleExercise
          turtleAngle={0}
          markers={['0', '', '', '', '']}
          labels={['', 'A', 'B', 'E', 'G']}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
