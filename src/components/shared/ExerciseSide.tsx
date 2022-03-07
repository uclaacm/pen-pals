import '../../styles/ExerciseSide.scss';
import {UnitCircleTick, UnitCircleExercise} from './UnitCircleExercise';

let labelOne: UnitCircleTick =({label: 'A', type: "unit-circle-unknown-label"});
let labelTwo: UnitCircleTick =({label: 'C', type: "unit-circle-unknown-label"});
let labelThree: UnitCircleTick =({label: '0˚', type: "unit-circle-known-label"});
let labelFour: UnitCircleTick =({label: 'B', type: "unit-circle-unknown-label"});
let labelFive: UnitCircleTick =({label: '90˚', type: "unit-circle-known-label"});

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">

      <UnitCircleExercise turtleAngle={10} labelOne={labelOne} labelTwo={labelTwo} labelThree={labelThree} labelFour={labelFour} labelFive={labelFive}/>

    </section>
  );
}

export default ExerciseSide;
