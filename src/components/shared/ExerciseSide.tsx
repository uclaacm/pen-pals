import { useState } from 'react';
import '../../styles/ExerciseSide.scss';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import CongratsPage from './Congratulations';
import AxisParent from './Exercises/AxisParent';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  const [completeExercises, setCompleteExercises] = useState(0);
  type availableExercises = 'axis' | 'congrats';

  const exercises: availableExercises[] = ['axis', 'congrats'];
  let curExercise;

  if (exercises[completeExercises] == 'axis') {
    curExercise = (
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
            toNextExercise={() => {
              setCompleteExercises(completeExercises + 1);
              return;
            }}
          />
        </div>
      </section>
    );
  } else if (exercises[completeExercises] === 'congrats') {
    curExercise = <CongratsPage></CongratsPage>;
  }

  return <div>{curExercise}</div>;
}

export default ExerciseSide;
