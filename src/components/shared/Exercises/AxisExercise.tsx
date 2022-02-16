import '../../../styles/Exercises/AxisExercise.scss';
import Axis from '../../../assets/Exercises/axis.svg'

interface AxisExerciseProps {
    orientation: string;
}

function AxisExercise({
    orientation,
  }: AxisExerciseProps): JSX.Element {

    return(
        <div className="axis-container" style={{
                transform: `rotate(${(orientation === 'horizontal' ? '0deg' : '90deg')})`
        }}>
            <img className="axis-img" src={Axis} alt="single-axis"/>
        </div>
    )
}

export default AxisExercise;