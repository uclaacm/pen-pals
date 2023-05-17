import { useState } from 'react';
import '../../styles/ExerciseSide.scss';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
import GraphExercise from './Exercises/GraphExercise';
import GraphInput from './Exercises/GraphInput';
import UnitCircleExercise from './Exercises/UnitCircleExercise';
('./Exercises/AxisExercise');

interface ExerciseSideProps {
  incrementExercise: () => void;
}

function ExerciseSide({ incrementExercise }: ExerciseSideProps): JSX.Element {
  const [completeExercises, setCompleteExercises] = useState(0);
  type availableExercises = 'axis' | 'congrats' | 'circle' | 'graph';

  const exercises: availableExercises[] = ['axis', 'graph', 'congrats'];
  let curExercise;

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
