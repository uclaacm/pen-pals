import '../../../styles/LessonSide.scss';

interface LevelSelectorProps {
  numLevels: number;
  currentLevel: number;
  maxLevelReached: number;
}

function LevelSelector({
  numLevels,
  currentLevel,
  maxLevelReached,
}: LevelSelectorProps): JSX.Element {
  return (
    <div className="selector-box">
      <div className="level-selector">
        {
          // numLevels * 2 - 1 elements in Array as one button for each layer and numLevels - 1 connectors.
          Array(numLevels * 2 - 1)
            .fill(0)
            .map((_, i) => {
              const level = i / 2 + 1;
              // If index is even, add a level button. Else, add a level connector.
              return i % 2 == 0 ? (
                <div
                  className={
                    'level-button' +
                    (level === currentLevel ? ' current-level' : '')
                  }
                >
                  <p style={{ position: 'relative', top: '1px' }}>{level}</p>
                </div>
              ) : (
                <div
                  className="level-connector"
                  style={{
                    visibility: level < maxLevelReached ? 'visible' : 'hidden',
                  }}
                ></div>
              );
            })
        }
      </div>
    </div>
  );
}

export default LevelSelector;
