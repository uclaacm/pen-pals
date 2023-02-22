import '../../../styles/Exercises/AxisExercise.scss';
import Axis from '../../../assets/Exercises/axis.svg';
import Turtle from '../../../assets/Exercises/turtle.svg';

interface AxisExerciseProps {
  orientation: string;
  markers: number[];
  labels: string[];
  turtlePosition: number;
}

function AxisExercise({
  orientation,
  markers,
  labels,
  turtlePosition,
}: AxisExerciseProps): JSX.Element {
  const markerSpacing = 60 / (markers.length - 1);
  return (
    <div
      className="axis-container"
      style={{
        transform: `rotate(${orientation === 'horizontal' ? '0deg' : '90deg'})`, // axis orientation
      }}
    >
      <img className="axis-img" src={Axis} alt="single-axis" />
      {markers.map((pos, idx) => {
        // map markers and corresponding labels onto axis

        const leftPosition = 45 + markerSpacing * pos; // calculate position for marker
        return (
          <div
            className="marker-container"
            style={{ left: `${leftPosition}%` }}
            key={pos}
          >
            {
              // render turtle at appropriate position
              pos === turtlePosition ? (
                <img
                  className="turtle-img"
                  src={Turtle}
                  alt="turtle-icon"
                  style={{
                    transform: `rotate(${
                      orientation === 'horizontal' ? '0deg' : '270deg'
                    })`,
                  }}
                />
              ) : null
            }
            <div // marker label (A, B, C, ...)
              className="marker-label"
              style={{
                transform: `rotate(${
                  orientation === 'horizontal' ? '0deg' : '270deg'
                })`,
              }}
            >
              {labels[idx]}
            </div>
            <div // marker line
              className="marker"
              style={{
                width: `calc(${pos == 0 ? 20 : 8}px + 1vw)`, // making markers larger or smaller
              }}
            />
            {labels[idx] === '' ? (
              <div // marker position
                className="marker-pos"
                style={{
                  transform: `rotate(${
                    orientation === 'horizontal' ? '0deg' : '270deg'
                  })`,
                  top: `${pos === 0 ? 90 : 75}%`, // shifting 0 downwards
                  fontSize: `${pos === 0 ? 2 : 1.5}rem`, // sizing fonts for numbers
                }}
              >
                {pos}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default AxisExercise;
