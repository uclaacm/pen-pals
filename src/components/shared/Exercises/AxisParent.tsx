import { useState } from 'react';
import '../../../styles/Exercises/AxisExercise.scss';
import AxisExercise from './AxisExercise';
import AxisInput from './AxisInputs';
('./Exercises/AxisExercise');

interface AxisParentProps {
  axisMarkers: number[][]; //2-D array for different sets of problems
  axisLabels: string[][];
}

/*
interface AxisInputProps {
  questionLabels: string[][];
  answers: number[][];
  setIsComplete: (a: boolean) => void;
}

interface AxisQuestion {
  label: string;
  answer: number; // Should change to being strings
  id: number; //This sucks lol
}
*/

function AxisParent({ axisMarkers, axisLabels }: AxisParentProps): JSX.Element {
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
  }
  return (
    <div>
      <AxisExercise
        orientation="horizontal"
        markers={axisMarkers[exerciseNum]}
        labels={axisLabels[exerciseNum]}
        turtlePosition={1}
      />
      <AxisInput
        questionLabels={questionLabels}
        answers={axisAnswers}
        nextExercise={nextExercise}
        setIsComplete={alert}
      />
    </div>
  );
}

export default AxisParent;