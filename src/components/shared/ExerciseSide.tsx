import '../../styles/ExerciseSide.scss';

import AxisParent from './Exercises/AxisParent';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        {/* <AxisExercise
          orientation="horizontal"
          markers={[-2, -1, 0, 1, 2]}
          labels={['A', '', '', 'B', 'C']}
          turtlePosition={1}
        />

        <AxisInput
          questionLabels={[
            ['a', 'b', 'c'],
            ['Hi!', 'bye!', '4', '43'],
            ['e', 'f'],
          ]}
          answers={[
            [2, 2, 1],
            [1, 4, 5, 6],
            [4, 5],
          ]}
          setIsComplete={alert}
        /> */}

        <AxisParent
          axisMarkers={[
            [-2, -1, 0, 1, 2],
            [-1, 0, 1, 2],
          ]}
          axisLabels={[
            ['A', '', '', 'B', 'C'],
            ['A', '', '', 'B'],
          ]}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
