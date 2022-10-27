import '../../styles/Graph.scss';

interface GraphProps {
  points: { x: number; y: number }[];
  //labels: string[];
  //cursorPosition: { x: number; y: number };
  //cursorOrientation: number; //TODO: radians or degrees?
}

function Graph({
  points,
}: //labels,
//cursorPosition,
//cursorOrientation,
GraphProps): JSX.Element {
  const leftBound = Math.min(-1, ...points.map((p) => Math.floor(p.x)));
  const rightBound = Math.max(1, ...points.map((p) => Math.ceil(p.x)));
  const topBound = Math.min(-1, ...points.map((p) => Math.floor(p.y)));
  const bottomBound = Math.max(1, ...points.map((p) => Math.ceil(p.y)));

  const verticalLineCount = rightBound - leftBound + 1;
  const horizontalLineCount = bottomBound - topBound + 1;
  //TODO: make it so the grid is square. Have to draw more than
  //`verticalLineCount` or `horizontalLineCount` lines depending
  //on which dimension the points need
  const lineSpacing = Math.min(
    100 / horizontalLineCount,
    100 / verticalLineCount
  );

  return (
    <div className="graph-container">
      {Array(verticalLineCount)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className="grid-line--vertical"
              style={{
                height: '100%',
                left: `${lineSpacing * (i + 0.5)}%`,
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
              className="grid-line--horizontal"
              style={{
                width: '100%',
                top: `${lineSpacing * (i + 0.5)}%`,
              }}
            />
          );
        })}

      {/* {<div className="grid-line--vertical"
                style={{
                    height: "100%",
                    left: `${spaceBetweenVertical}%`
                }}>
            </div>} */}
    </div>
  );
}

export default Graph;
