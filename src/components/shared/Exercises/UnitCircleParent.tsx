import { useState, useEffect } from 'react';
import '../../../styles/Exercises/AxisExercise.scss';
import UnitCircleExercise from './UnitCircleExercise';
import UnitCircleInput from './UnitCircleInput';
('./Exercises/AxisExercise');

interface UnitCircleParentProps {
  unitCircleMarkers: string[][]; //2-D array for different sets of problems
  unitCircleLabels: string[][];
  directions: string[][];
  toNextExercise: () => void;
}

function UnitCircleParent({
  unitCircleMarkers,
  unitCircleLabels,
  directions,
  toNextExercise,
}: UnitCircleParentProps): JSX.Element {
  //make 2d array for answers using the non-empty elements of unitCircleLabels
  const answers: number[][] = [];
  const questionLabels: string[][] = [];
  const questionDirections: string[][] = [];
  for (let i = 0; i < unitCircleMarkers.length; i++) {
    const currentAnswers = [];
    const currentLabels = [];
    const currentDirections = [];
    const length = unitCircleMarkers[i].length;
    for (let j = 0; j < length; j++) {
      if (unitCircleLabels[i][j] !== '') {
        let multiplier = 1;
        if (directions[i][j] == 'left') {
          multiplier = -1;
        }
        currentAnswers.push(
          parseInt(unitCircleMarkers[i][j].slice(0, -1)) * multiplier
        );
        currentLabels.push(unitCircleLabels[i][j]);
        currentDirections.push(directions[i][j]);
      }
    }
    answers.push(currentAnswers);
    questionLabels.push(currentLabels);
    questionDirections.push(currentDirections);
  }

  const [exerciseNum, setExerciseNum] = useState(0);
  function nextExercise() {
    setExerciseNum(exerciseNum + 1);
  } // advance to next exercise within axis inputs exercise

  useEffect(() => {
    if (exerciseNum == unitCircleMarkers.length) {
      toNextExercise(); // update parent exercise side that axis input exercise is complete
    }
  }, [exerciseNum]);

  return (
    <div>
      <UnitCircleExercise
        //orientation="horizontal"
        turtleAngle={1}
        markers={
          unitCircleMarkers[Math.min(exerciseNum, unitCircleMarkers.length - 1)]
        }
        labels={
          unitCircleLabels[Math.min(exerciseNum, unitCircleLabels.length - 1)]
        }
      />
      <UnitCircleInput
        answers={answers}
        questionLabels={questionLabels}
        directions={questionDirections}
        nextExercise={nextExercise}
      />
    </div>
  );
}

export default UnitCircleParent;
