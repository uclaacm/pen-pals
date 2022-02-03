import '../../../styles/LessonSide.scss';

interface LevelSelectorProps {
  numLevels: number;
  currentLevel: number;
}

function LevelSelector({ numLevels, currentLevel }: LevelSelectorProps): JSX.Element {
  return (
    <div className="selector-box">
      <div className="level-selector">
        {Array(numLevels * 2 - 1)
          .fill(0)
          .map((_, i) => {
            const level = i/2 + 1;
            return i % 2 == 1 ? (
              <div className={"level-connector" + (level < currentLevel ? ' reached-level-connector' : '')}></div>
            ) : (
              <div className={"level-button" + (level == currentLevel ? ' current-level' : '')}>
                {level}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LevelSelector;
