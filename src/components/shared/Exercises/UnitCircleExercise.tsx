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
  const cursorTicks = Math.PI / (labels.length - 1);
  let cursorAngle = 0 - cursorTicks;
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
        cursorAngle += cursorTicks;
        return (
          <div key={element}>
            <div
              className="circle-exercise"
              style={{
                left: `${
                  (1 - Math.cos(curAngle)) * 31 + //middle right and left
                  (curAngle <= Math.PI / 2
                    ? curAngle == Math.PI / 2
                      ? 17 //middle
                      : 19 //left
                    : 14) //right
                }%`,
                bottom: `${
                  Math.sin(curAngle) * 53 + //middle right and left
                  (curAngle <= Math.PI / 2
                    ? curAngle == Math.PI / 2
                      ? 28 //middle
                      : 25 //left
                    : 25) //right
                }%`,
              }}
            >
              {element}
            </div>
            {labels[idx] === '' ? (
              <div
                className="circle-label"
                style={{
                  left: `${
                    (1 - Math.cos(curAngle)) * 30 + //middle left and right
                    (curAngle <= Math.PI / 2
                      ? curAngle == Math.PI / 2
                        ? 19 //middle
                        : 20 //left
                      : 15) //right
                  }%`,
                  bottom: `${
                    Math.sin(curAngle) * 55 + //middle left and right
                    (curAngle <= Math.PI / 2
                      ? curAngle == Math.PI / 2
                        ? 30 //middle
                        : 25 //left
                      : 25) //right
                  }%`,
                }}
              >
                {markers[idx]}
              </div>
            ) : null}

            <img
              src={Cursor}
              className="circle-cursor"
              style={{
                left: `${
                  (1 - Math.cos(cursorAngle)) * 43 +
                  (cursorAngle <= Math.PI / 2
                    ? cursorAngle == Math.PI / 2
                      ? 5
                      : 7
                    : 2)
                }%`,
                bottom: `${
                  Math.sin(cursorAngle) * 80 +
                  (cursorAngle <= Math.PI / 2
                    ? cursorAngle == Math.PI / 2
                      ? 25
                      : 28
                    : 28)
                }%`,
                transform: `rotate(${cursorAngle}rad) ${
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
