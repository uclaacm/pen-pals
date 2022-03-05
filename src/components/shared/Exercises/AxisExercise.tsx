import '../../../styles/Exercises/AxisExercise.scss';
import Axis from '../../../assets/Exercises/axis.svg';

interface AxisExerciseProps {
  orientation: string;
  markers: Number[];
  labels: string[];
}

function AxisExercise({ orientation, markers, labels }: AxisExerciseProps): JSX.Element {
  const markerSpacing = 60/(markers.length - 1);
  return (
    <div className="axis-container" style={{
      transform: `rotate(${orientation === 'horizontal' ? '0deg' : '90deg'})`,
    }}>
      <img className="axis-img" src={Axis} alt="single-axis" />
      {
        markers.map((pos, idx) => {
          const leftPosition = 45 + (markerSpacing * pos);
          return (
            <div className="marker-container" style={{
                left: `${leftPosition}%`
            }}>
              <div className = "marker-label" style={{
                  transform: `rotate(${orientation === 'horizontal' ? '0deg' : '270deg'})`
              }}>
                {labels[idx]}
              </div>
              <div 
                className = "marker" 
                style = {{
                  width: `calc(${(pos == 0 ? 20 : 8)}px + 1vw)`
                }}
              />
              <div className="marker-pos" style={{
                  transform: `rotate(${orientation === 'horizontal' ? '0deg' : '270deg'})`
              }}>
                {pos}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default AxisExercise;
