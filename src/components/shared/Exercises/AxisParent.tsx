import { useState, useEffect } from 'react';
import '../../../styles/Exercises/AxisExercise.scss';
import AxisExercise from './AxisExercise';
import AxisInput from './AxisInputs';
('./Exercises/AxisExercise');

interface AxisParentProps {
  axisMarkers: number[][]; //2-D array for different sets of problems
  axisLabels: string[][];
  orientations: string[];
  toNextExercise: () => void;
}

function AxisParent({
  axisMarkers,
  axisLabels,
  orientations,
  toNextExercise,
}: AxisParentProps): JSX.Element {
  //make 2d array for answers using the non-empty elements of axisLabels
  const axisAnswers: number[][] = [];
  const questionLabels: string[][] = [];
  for (let i = 0; i < axisMarkers.length; i++) {
    const currentAnswers = [];
    const currentLabels = [];
    const length = axisMarkers[i].length;
    for (let j = 0; j < length; j++) {
      if (axisLabels[i][j] !== '') {
        currentAnswers.push(axisMarkers[i][j]);
        currentLabels.push(axisLabels[i][j]);
      }
    }
    axisAnswers.push(currentAnswers);
    questionLabels.push(currentLabels);
  }

  const [exerciseNum, setExerciseNum] = useState(0);
  function nextExercise() {
    setExerciseNum(exerciseNum + 1);
  } // advance to next exercise within axis inputs exercise

  useEffect(() => {
    if (exerciseNum == axisMarkers.length) {
      toNextExercise(); // update parent exercise side that axis input exercise is complete
    }
  });

  return (
    <div>
      <AxisExercise
        //orientation="horizontal"
        orientation={
          orientations[Math.min(exerciseNum, axisMarkers.length - 1)]
        }
        markers={axisMarkers[Math.min(exerciseNum, axisMarkers.length - 1)]}
        labels={axisLabels[Math.min(exerciseNum, axisLabels.length - 1)]}
        turtlePosition={1}
      />
      <AxisInput
        questionLabels={questionLabels}
        answers={axisAnswers}
        nextExercise={nextExercise}
      />
    </div>
  );
}

export default AxisParent;
