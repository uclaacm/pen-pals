import '../../styles/ExerciseSide.scss';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        <AxisParent
          axisMarkers={[
            [-2, -1, 0, 1, 2],
            [-1, 0, 1, 2],
          ]}
          axisLabels={[
            ['A', '', '', 'B', 'C'],
            ['A', '', '', 'B'],
          ]}
          toNextExercise={() => {return;}}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
