import '../../styles/ExerciseSide.scss';
//import AxisExercise from './Exercises/AxisExercise';
//import AxisInput from './Exercises/AxisInputs';
import UnitCircleExercise from './Exercises/UnitCircleExercise';
import UnitCircleInput from './Exercises/UnitCircleInput';
//import ExerciseComplete from './Exercises/ExerciseComplete';
//import Graph from './Exercises/Graph';

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <div className="exercise-box">
        {/*<Graph
          origin={{ x: 0, y: 0 }}
          points={[
            { x: -1, y: 1 },
            { x: 2, y: -1 },
          ]}
          labels={['', '']}
          pointerPosition={{ x: 1, y: 1 }}
          pointerOrientation={45}
        />*/}
        <UnitCircleExercise
          turtleAngle={0}
          markers={['', '45°', '0°', '', '']}
          labels={['A', '', '', 'B', 'C']}
        />
        <p className="instruction">
          Type the correct numbers into the blanks below!
        </p>
        <UnitCircleInput
          questionLabels={[['A', 'B', 'C']]}
          answers={[[90, 45, 90]]}
          left={[[true, false, true]]}
          setIsComplete={alert}
        />
      </div>
    </section>
  );
}

export default ExerciseSide;
