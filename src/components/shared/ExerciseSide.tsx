import { useState } from 'react';
import '../../styles/ExerciseSide.scss';
//import AxisInput from './Exercises/AxisInputs';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
//import AxisParent from './Exercises/AxisParent';
//import UnitCircleExercise from './Exercises/UnitCircleExercise';
//('./Exercises/AxisExercise');
//import UnitCircleInput from './Exercises/UnitCircleInput';
import GraphExercise from './Exercises/GraphExercise';
('./Exercises/AxisExercise');
import GraphInput from './Exercises/GraphInput';

interface ExerciseSideProps {
  incrementExercise: () => void;
}
/* eslint-disable*/
function ExerciseSide({ incrementExercise }: ExerciseSideProps): JSX.Element {
  const [completeExercises, setCompleteExercises] = useState(0);
  type availableExercises = 'axis' | 'congrats' | 'circle';
  /* eslint-enable */
  const exercises: availableExercises[] = ['axis', 'circle', 'congrats'];
  let curExercise;

  if (exercises[completeExercises] == 'axis') {
    curExercise = (
      <section id="exercise-side-container">
        <div className="exercise-box">
          <GraphInput />
        </div>
      </section>
    );
  } else if (exercises[completeExercises] === 'circle') {
    curExercise = (
      <GraphExercise
        turtleAngle={1}
        markers={['A', '', 'B']}
        labels={['B', 'C', 'D']}
      />
    );
  }

  return (
    <section id="exercise-side-container">
      <div className="exercise-box">{curExercise}</div>
    </section>
  );
}

export default ExerciseSide;
