import '../../../styles/Graph.scss';
import GraphPoint from '../../../assets/Exercises/graphPoint.svg';
import Pointer from '../../../assets/Exercises/pointer.svg';

export enum LineStyles {
  Solid,
  Dashed,
}

interface GraphProps {
  origin: { x: number; y: number };
  points: { x: number; y: number; label?: string; line?: LineStyles }[];
  pointerPosition: { x: number; y: number };
  pointerOrientation: number;
}

function GraphExercise({
  origin,
  points,
  pointerPosition,
  pointerOrientation,
}: GraphProps): JSX.Element {
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

      {points
        .filter((p) => p.label !== undefined)
        .map((point, i) => {
          const offsetX = 0.2;
          const offsetY = -0.2;
          return (
            <div
              key={i}
              className="point-label"
              style={{
                left: `${xPos(4 + origin.x + point.x + offsetX)}%`,
                top: `${yPos(2 - origin.y - point.y + 0.25 + offsetY)}%`,
              }}
            >
              {point.label}
            </div>
          );
        })}

      {points.map((point, i) => {
        if (point.line === undefined || i == 0) {
          return;
        }
        const startX = points[i - 1].x;
        const startY = points[i - 1].y;
        const endX = point.x;
        const endY = point.y;
        const dxPercent = xPos(endX) - xPos(startX);
        const dyPercent = yPos(endY) - yPos(startY);
        // use this factor because dyPercent is relative to height,
        // but we express a line's length as a percentage of width.
        const yxRatio = 14.5 / 31;
        const lineLengthPercent =
          Math.sqrt(
            (dxPercent / 100) ** 2 + ((dyPercent * yxRatio) / 100) ** 2
          ) * 100;
        const angleRadians = Math.atan2(dyPercent * yxRatio, dxPercent);
        return (
          <div
            key={i}
            className={
              point.line == LineStyles.Dashed
                ? 'line-segment-dashed'
                : 'line-segment-solid'
            }
            style={{
              left: `${xPos(4 + origin.x + startX)}%`,
              top: `${yPos(2 - origin.y - startY + 0.25)}%`,
              transformOrigin: 'center left',
              transform: `rotate(${-angleRadians}rad)`,
              width: `${lineLengthPercent}%`,
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default GraphExercise;
