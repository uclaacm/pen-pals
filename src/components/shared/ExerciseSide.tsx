import '../../styles/ExerciseSide.scss';
import { UnitCircleTick, UnitCircleExercise } from './UnitCircleExercise';

const labelOne: UnitCircleTick = {
  label: 'A',
  type: 'unit-circle-unknown-label',
};
const labelTwo: UnitCircleTick = {
  label: 'C',
  type: 'unit-circle-unknown-label',
};
const labelThree: UnitCircleTick = {
  label: '0˚',
  type: 'unit-circle-known-label',
};
const labelFour: UnitCircleTick = {
  label: 'B',
  type: 'unit-circle-unknown-label',
};
const labelFive: UnitCircleTick = {
  label: '90˚',
  type: 'unit-circle-known-label',
};

function ExerciseSide(): JSX.Element {
  return (
    <section id="exercise-side-container">
      <UnitCircleExercise
        turtleAngle={10}
        labelOne={labelOne}
        labelTwo={labelTwo}
        labelThree={labelThree}
        labelFour={labelFour}
        labelFive={labelFive}
      />
    </section>
  );
}

export default ExerciseSide;
