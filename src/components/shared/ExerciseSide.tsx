import { useState } from 'react';
import '../../styles/ExerciseSide.scss';
//import AxisInput from './Exercises/AxisInputs';

//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import AxisParent from './Exercises/AxisParent';
import GraphExercise from './Exercises/GraphExercise';
import GraphInput from './Exercises/GraphInput';
//import AxisParent from './Exercises/AxisParent';
import UnitCircleParent from './Exercises/UnitCircleParent';

('./Exercises/AxisExercise');

interface ExerciseSideProps {
  ExercisesNum: number;
  incrementExercise: () => void;
  // maxLevel: number
}

function ExerciseSide({
  incrementExercise,
  ExercisesNum,
}: // maxLevel,
ExerciseSideProps): JSX.Element {
  const [displayExercise, setDisplayExercise] = useState(0);

  type availableExercises =
    | 'axis'
    | 'congrats'
    | 'graph0'
    | 'unitcircle'
    | 'graph1';

  const exercises: availableExercises[] = [
    'unitcircle',
    'axis',
    'graph0',
    'congrats',
  ];
  let curExercise;

  if (displayExercise != ExercisesNum) {
    setDisplayExercise(ExercisesNum);
  }

  if (exercises[displayExercise] == 'graph0') {
    curExercise = (
      <div>
        <div>
          <GraphExercise
            origin={{ x: 0, y: 0 }}
            points={[
              { x: 0, y: 0, label: '' },
              { x: 2, y: 1, label: 'A', line: 1 },
              { x: 1, y: -1, label: 'B', line: 1 },
              { x: 0, y: -1, label: 'C', line: 1 },
            ]}
            pointerPosition={{ x: 0, y: 0 }}
            pointerOrientation={0}
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
                  { type: 'input', width: 2, id: 0, answer: '2' },
                  { type: 'text', text: ', 1)' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.setheading(' },
                  { type: 'input', width: 4, id: 1, answer: '225' },
                  { type: 'text', text: ')' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.' },
                  { type: 'input', width: 8, id: 2, answer: 'forward' },
                  { type: 'text', text: '()' },
                ],
              },
              {
                textArray: [
                  { type: 'text', text: 'turtle.goto(' },
                  { type: 'input', width: 2, id: 3, answer: '0' },
                  { type: 'text', text: ', ' },
                  { type: 'input', width: 2, id: 4, answer: '-1' },
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
  } else if (exercises[displayExercise] == 'graph1') {
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
  } else if (exercises[displayExercise] == 'axis') {
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
            setDisplayExercise(displayExercise + 1);
            incrementExercise();
            return;
          }}
        />
      </div>
    );
  } else if (exercises[displayExercise] === 'unitcircle') {
    curExercise = (
      <div>
        <div>
          <UnitCircleParent
            unitCircleMarkers={[
              ['-90\xB0', '-45\xB0', '0\xB0', '45\xB0', '90\xB0'],
              ['-90\xB0', '-45\xB0', '0\xB0', '45\xB0', '90\xB0'],
              [
                '-90\xB0',
                '-60\xB0',
                '-30\xB0',
                '0\xB0',
                '30\xB0',
                '60\xB0',
                '90\xB0',
              ],
              [
                '-90\xB0',
                '-60\xB0',
                '-30\xB0',
                '0\xB0',
                '30\xB0',
                '60\xB0',
                '90\xB0',
              ],
            ]}
            unitCircleLabels={[
              ['A', 'C', '', 'B', ''],
              ['', 'A', 'B', '', 'C'],
              ['', '', 'A', 'B', '', 'C', ''],
              ['', 'A', '', '', 'B', '', 'C'],
            ]}
            directions={[
              ['left', 'right', '', 'right', ''],
              ['', 'left', 'left', '', 'left'],
              ['', '', 'right', 'left', '', 'right', ''],
              ['', 'right', '', '', 'right', '', 'left'],
            ]}
            toNextExercise={() => {
              setDisplayExercise(displayExercise + 1);
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
