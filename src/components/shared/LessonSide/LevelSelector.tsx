import '../../../styles/LessonSide.scss';

interface IProps {
  items: number;
  current: number;
}

function LevelSelector({ items, current }: IProps): JSX.Element {
  const levelList = () => {
    const list = [];
    for (let item = 1; item <= items; item++) {
      let buttonStyles = 'level-button other-level';
      let connectorStyles = 'level-connector';
      if (item == current) {
        buttonStyles = 'level-button current-level';
      } else if (item < current) {
        connectorStyles += ' reached-level-connector';
      }
      list.push(<div className={buttonStyles}>{item}</div>);
      list.push(<div className={connectorStyles}></div>);
    }
    return list;
  };

  return (
    <div className="selector-box">
      <div className="level-selector">{levelList()}</div>
    </div>
  );
}

export default LevelSelector;
