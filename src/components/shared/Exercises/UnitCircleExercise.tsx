import Turtle from '../../../assets/Exercises/circleTurtle.svg';
import Cursor from '../../../assets/Exercises/cursor.svg';
import Circle from '../../../assets/Exercises/unitEllipse.svg';
import '../../../styles/Exercises/UnitCircleExercise.scss';
interface UnitCircleProps {
  turtleAngle: number;
  markers: string[];
  labels: string[];
}

function UnitCircleExercise({
  turtleAngle,
  markers,
  labels,
}: UnitCircleProps): JSX.Element {
  const rotateString = turtleAngle + 'deg';
  const angleBetweenTicks = Math.PI / (labels.length - 1);
  let curAngle = 0 - angleBetweenTicks;
  const scaleCursor = 'scale(1.5)';
  return (
    <div className="circle-container">
      <img src={Circle} className="circle" />
      <img
        src={Turtle}
        className="turtle"
        style={{
          transform: `rotate(${rotateString})`,
        }}
      />
      {labels.map((element, idx) => {
        curAngle += angleBetweenTicks;
        return (
          <div key={element}>
            <div
              className="circle-exercise"
              style={{
                left: `${
                  (1 - Math.cos(curAngle)) * 40 +
                  (curAngle <= Math.PI / 2
                    ? curAngle == Math.PI / 2
                      ? 7.5
                      : 5
                    : 10)
                }%`,
                bottom: `${Math.sin(curAngle) * 50 + 30}%`,
              }}
            >
              {element}
            </div>
            <div
              className="circle-label"
              style={{
                left: `${
                  (1 - Math.cos(curAngle)) * 45 +
                  (curAngle <= Math.PI / 2
                    ? curAngle == Math.PI / 2
                      ? 2.5
                      : 5
                    : 0)
                }%`,
                bottom: `${Math.sin(curAngle) * 50 + 30}%`,
              }}
            >
              {markers[idx]}
            </div>

            <img
              src={Cursor}
              className="circle-cursor"
              style={{
                left: `${
                  (1 - Math.cos(curAngle)) * 50 +
                  (curAngle <= Math.PI / 2
                    ? curAngle == Math.PI / 2
                      ? -2.5
                      : -10
                    : 5)
                }%`,
                bottom: `${Math.sin(curAngle) * 75 + 30}%`,
                transform: `rotate(${curAngle}rad) ${
                  labels.length % 2 === 1 &&
                  idx === Math.floor(labels.length / 2)
                    ? scaleCursor
                    : ''
                }`,
              }}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default UnitCircleExercise;
