import '../../styles/Graph.scss';
import GraphPoint from '../../assets/Exercises/graphPoint.svg';
import Pointer from '../../assets/Exercises/pointer.svg';

interface GraphProps {
  origin: { x: number; y: number };
  points: { x: number; y: number }[];
  labels: string[];
  pointerPosition: { x: number; y: number };
  pointerOrientation: number; //TODO: radians or degrees?
}

function Graph({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  origin,
  points,
  labels,
  pointerPosition,
  pointerOrientation,
}: /* eslint-enable @typescript-eslint/no-unused-vars */
GraphProps): JSX.Element {
  const verticalLineCount = 7;
  const horizontalLineCount = 5;
  const verticalLineSpacing = 100 / (verticalLineCount + 1);
  const horizontalLineSpacing = 100 / (horizontalLineCount - 0.5);

  function xPos(lines: number): number {
    return verticalLineSpacing * lines;
  }

  function yPos(lines: number): number {
    return horizontalLineSpacing * lines;
  }

  return (
    <div className="graph-container">
      {Array(verticalLineCount)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className={
                i == 3 + origin.x ? 'axis-line vertical' : 'grid-line vertical'
              }
              style={{
                left: `${xPos(i + 1)}%`,
              }}
            />
          );
        })}

      {Array(horizontalLineCount)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className={
                i == 2 - origin.y
                  ? 'axis-line horizontal'
                  : 'grid-line horizontal'
              }
              style={{
                top: `${yPos(i + 0.25)}%`,
              }}
            />
          );
        })}

      {
        <img
          className="pointer"
          src={Pointer}
          style={{
            transform: `translate(-50%, -50%) rotate(${-pointerOrientation}deg)`,
            left: `${xPos(4 + origin.x + pointerPosition.x)}%`,
            top: `${yPos(2 - origin.y - pointerPosition.y + 0.25)}%`,
          }}
        />
      }

      {points.map((point, i) => {
        //let label = labels[i];
        return (
          <img
            key={i}
            className="point"
            src={GraphPoint}
            style={{
              left: `${xPos(4 + origin.x + point.x)}%`,
              top: `${yPos(2 - origin.y - point.y + 0.25)}%`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Graph;
