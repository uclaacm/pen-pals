import UnitCircleBase from '../../assets/unit-circle-base.svg';
import UnitCircleMarkers from '../../assets/unit-circle-markers.svg';
import UnitCircleTurle from '../../assets/unit-circle-turtle.svg';

import '../../styles/ExerciseSide.scss';

/* Currently working under the assumption that the exercies
   has 5 total ticks. */

export interface UnitCircleTick {
  label: string;
  type: string;
}

interface UnitCircleExerciseProps {
  turtleAngle: number;
  labelOne: UnitCircleTick;
  labelTwo: UnitCircleTick;
  labelThree: UnitCircleTick;
  labelFour: UnitCircleTick;
  labelFive: UnitCircleTick;
}

export function UnitCircleExercise({
  turtleAngle,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
}: UnitCircleExerciseProps): JSX.Element {
  return (
    <section id="exercise-side-container">
      <img className="unit-circle" id="unit-circle" src={UnitCircleBase} alt="unit circle!!" />

      <img className="unit-circle-markers" id="unit-markers" src={UnitCircleMarkers} alt="unit markers"/>

      <img className="unit-circle-turtle" id="unit-turtle" src={UnitCircleTurle} alt="unit turtle" style={{transform: `rotate(${turtleAngle}deg)`}}/>

      <p className={labelOne.type} style={{ position: 'absolute', left: 920, top: 220 }}>{labelOne.label}</p>

      <p className={labelTwo.type} style={{ position: 'absolute', left: 960, top: 130 }}>{labelTwo.label}</p>

      <p className={labelThree.type} style={{ position: 'absolute', left: 1060, top: 100 }}>{labelThree.label}</p>

      <p className={labelFour.type} style={{ position: 'absolute', left: 1160, top: 130 }}>{labelFour.label}</p>

      <p className={labelFive.type} style={{ position: 'absolute', left: 1190, top: 235 }}>{labelFive.label}</p>

    </section>
  );
}
