import { useState } from 'react';
import '../../styles/ExerciseSide.scss';
//import AxisInput from './Exercises/AxisInputs';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
import GraphExercise from './Exercises/GraphExercise';
import GraphInput from './Exercises/GraphInput';
//import AxisParent from './Exercises/AxisParent';
import UnitCircleExercise from './Exercises/UnitCircleExercise';
import UnitCircleInput from './Exercises/UnitCircleInput';
('./Exercises/AxisExercise');

interface ExerciseSideProps {
  ExercisesNum: number;
  incrementExercise: () => void;
}

function ExerciseSide({
  incrementExercise,
  ExercisesNum,
}: ExerciseSideProps): JSX.Element {
  const [completeExercises, setCompleteExercises] = useState(0);
  type availableExercises = 'axis' | 'congrats' | 'graph' | 'unitcircle';

  const exercises: availableExercises[] = [
    'unitcircle',
    'axis',
    'graph',
    'congrats',
  ];
  let curExercise;

  if (completeExercises != ExercisesNum) {
    setCompleteExercises(ExercisesNum);
  }

  if (exercises[completeExercises] == 'graph') {
    curExercise = (
      <div>
        <div>
          <GraphExercise
            origin={{ x: 0, y: 0 }}
            points={[
              { x: -1, y: 1, label: 'A' },
              { x: 2, y: -1, label: 'B', line: 1 },
              { x: 1, y: 0, label: 'C', line: 0 },
              { x: 0, y: -2, label: 'D', line: 0 },
            ]}
            pointerPosition={{ x: 1, y: 1 }}
            pointerOrientation={45}
          />
        </div>
        <div style={{ paddingTop: '10vw' }}>
          <GraphInput
            questionArray={[
              {
                textArray: [
                  {
                    type: 'text',
                    text: '# Goto point A and draw on the dotted line',
                  },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.goto(' },
                  { type: 'input', width: 2 },
                  { type: 'text', text: ', -1)' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.setheading(' },
                  { type: 'input', width: 4 },
                  { type: 'text', text: ')' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.' },
                  { type: 'input', width: 8 },
                  { type: 'text', text: '()' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.goto(' },
                  { type: 'input', width: 2 },
                  { type: 'text', text: ', ' },
                  { type: 'input', width: 2 },
                  { type: 'text', text: ')' },
                ],
              },
            ]}
            nextExercise={() => incrementExercise()}
          />
        </div>
      </div>
    );

    /*<div className="exercise-box">
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
    );*/
  } else if (exercises[completeExercises] == 'axis') {
    curExercise = (
      <div className="exercise-box">
        <AxisParent
          axisMarkers={[
            [-2, -1, 0, 1, 2],
            [-1, 0, 1, 2],
            [-2, -1, 0, 1],
          ]}
          axisLabels={[
            ['A', '', '', 'B', 'C'],
            ['A', '', '', 'B'],
            ['A', '', 'B', 'C'],
          ]}
          orientations={['horizontal', 'horizontal', 'vertical']}
          toNextExercise={() => {
            setCompleteExercises(completeExercises + 1);
            incrementExercise();
            return;
          }}
        />
      </div>
    );
  } else if (exercises[completeExercises] === 'unitcircle') {
    curExercise = (
      <div>
        <div>
          <UnitCircleExercise
            turtleAngle={1}
            markers={['A', '', 'B']}
            labels={['B', 'C', 'D']}
          />
          <UnitCircleInput
            nextExercise={() => {
              setCompleteExercises(completeExercises + 1);
              incrementExercise();
              return;
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <section id="exercise-side-container">
      <div className="exercise-box">{curExercise}</div>
    </section>
  );
}

export default ExerciseSide;
