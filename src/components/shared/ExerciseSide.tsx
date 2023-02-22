import { useState } from 'react';
import '../../styles/ExerciseSide.scss';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  const [exerciseNum, setExerciseNum] = useState(0); //indicates switch from axis input to unit circle exercise

  function changeExercise() {
    setExerciseNum(exerciseNum + 1);
  }
  if (exerciseNum == 0)
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
            toNextExercise={changeExercise}
          />
          <p>exercise {exerciseNum}</p>
        </div>
      </section>
    );
  else return <p>exercise {exerciseNum}</p>;
}

export default ExerciseSide;
