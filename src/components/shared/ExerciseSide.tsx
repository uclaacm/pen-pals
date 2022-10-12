import '../../styles/ExerciseSide.scss';
import AxisExercise from './Exercises/AxisExercise';
import AxisInput from './Exercises/AxisInputs';
('./Exercises/AxisExercise');

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

        <AxisInput
          questionLabels={[
            ['a', 'b', 'c'],
            ['e', 'f'],
          ]}
          answers={[
            [2, -2, -1],
            [4, 5],
          ]}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
