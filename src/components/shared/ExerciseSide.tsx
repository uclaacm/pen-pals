import '../../styles/ExerciseSide.scss';
import AxisExercise from './Exercises/AxisExercise';
import AxisInput from './Exercises/AxisInputs';
import Graph from './Graph';
('./Exercises/AxisExercise');

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        <Graph
          origin={{ x: 0, y: 0 }}
          points={[]}
          labels={[]}
          pointerPosition={{ x: 1, y: 1 }}
          pointerOrientation={45}
        />

        {/*<AxisExercise
          orientation="horizontal"
          markers={[-2, -1, 0, 1, 2]}
          labels={['A', '', '', 'B', 'C']}
          turtlePosition={1}
        />
        <p className="instruction">
          Type the correct numbers into the blanks below!
        </p>
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
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
