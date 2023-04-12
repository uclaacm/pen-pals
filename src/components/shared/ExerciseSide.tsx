import { useState } from 'react';
import '../../styles/ExerciseSide.scss';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
import UnitCircleExercise from './Exercises/UnitCircleExercise';
('./Exercises/AxisExercise');

interface ExerciseSideProps {
  incrementExercise: () => void;
}

function ExerciseSide({ incrementExercise }: ExerciseSideProps): JSX.Element {
  const [completeExercises, setCompleteExercises] = useState(0);
  type availableExercises = 'axis' | 'congrats' | 'circle';

  const exercises: availableExercises[] = ['axis', 'circle', 'congrats'];
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
              incrementExercise();
              return;
            }}
          />
        </div>
      </section>
    );
  } else if (exercises[completeExercises] === 'circle') {
    curExercise = (
      <UnitCircleExercise
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
