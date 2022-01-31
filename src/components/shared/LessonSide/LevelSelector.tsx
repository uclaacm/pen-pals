import '../../../styles/LessonSide.scss';

interface IProps {
  items: number,
  current: number,
}

function LevelSelector({items, current}:IProps): JSX.Element {
  const levelList = () => {
    const list = [];
    for (let item = 1; item <= items; item++) {
      let styleClasses = 'level-button other-level';
      if (item == current) {styleClasses = 'level-button current-level';}
      list.push(<div className={styleClasses}>{item}</div>);
      if (item != items) {list.push(<div className="level-connector"></div>);}
    }
    return list;
  };

  return (
    <div className="selector-box">
      <div className="level-selector">
        {levelList()}
      </div>
    </div>
  );
}

export default LevelSelector;
