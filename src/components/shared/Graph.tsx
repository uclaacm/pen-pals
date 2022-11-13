import '../../styles/Graph.scss';

interface GraphProps {
  origin: { x: number; y: number };
  points: { x: number; y: number }[];
  labels: string[];
  cursorPosition: { x: number; y: number };
  cursorOrientation: number; //TODO: radians or degrees?
}

function Graph({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  origin,
  points,
  labels,
  cursorPosition,
  cursorOrientation,
}: /* eslint-enable @typescript-eslint/no-unused-vars */
GraphProps): JSX.Element {
  const verticalLineCount = 7;
  const horizontalLineCount = 5;
  const verticalLineSpacing = 100 / (verticalLineCount + 1);
  const horizontalLineSpacing = 100 / (horizontalLineCount - 0.5);

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
                left: `${verticalLineSpacing * (i + 1)}%`,
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
                  : 'grid-line horizontal '
              }
              style={{
                top: `${horizontalLineSpacing * (i + 0.25)}%`,
              }}
            />
          );
        })}
    </div>
  );
}

export default Graph;
