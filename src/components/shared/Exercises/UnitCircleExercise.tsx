import Turtle from '../../../assets/Exercises/turtle.svg';
import Circle from '../../../assets/Exercises/unitCircle.svg';
import '../../../styles/Exercises/UnitCircleExercise.scss';
interface UnitCircleProps {
  turtleAngle: number,
  labelTicks: number[],
  exerciseTicks: number[],
}

function UnitCircleExercise({
  turtleAngle,
  labelTicks,
  exerciseTicks,
}: UnitCircleProps): JSX.Element {
  const rotateString = turtleAngle + 'deg';
  return (
    <div className='circle-container'>
      <img src={Circle} className='circle' />
      <img
        src={Turtle} className='turtle'
        style={{
          transform: `rotate(${rotateString})`
        }} />
    </div>
  );
}

export default UnitCircleExercise;