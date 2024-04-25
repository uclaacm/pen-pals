import encouragingTurtle from '../../../assets/EncouragingTurtle.svg';
import encouragingTurtleWork from '../../../assets/LessonSide/EncouragingTurtleDrawnToWork.svg';
import encouragingTurtleFullPoints from '../../../assets/LessonSide/EncouragingTurtleFullPoints.svg';
import encouragingTurtleGenius from '../../../assets/LessonSide/EncouragingTurtleGenius.svg';
import encouragingTurtleNiceGoing from '../../../assets/LessonSide/EncouragingTurtleNiceGoing.svg';
import encouragingTurtleSkills from '../../../assets/LessonSide/EncouragingTurtleSkills.svg';
import encouragingTurtleSuccess from '../../../assets/LessonSide/EncouragingTurtleSuccess.svg';

interface TurtleProps {
  turtleID: number;
}

interface TurtleData {
  [key: number]: [fig: string, altText: string];
}

const turtleIDs: TurtleData = {
  1: [
    encouragingTurtleFullPoints,
    'Turtle saying Full points for you!',
  ],
  2: [encouragingTurtle, 'Turtle saying You can do it!'],
  3: [
    encouragingTurtleSkills,
    'Turtle saying Your skills are numerous!',
  ],
  4: [
    encouragingTurtleGenius,
    "Turtle saying There's no end to your genius!",
  ],
  5: [encouragingTurtleNiceGoing, 'Turtle saying Nice going!'],
  6: [
    encouragingTurtleWork,
    "Turtle saying I'm drawn to your work!",
  ],
  7: [
    encouragingTurtleSuccess,
    'Turtle saying A large degree of success!',
  ],
};

function Turtle({ turtleID }: TurtleProps): JSX.Element {
  return (
    <img
      src={turtleIDs[turtleID][0]}
      alt={turtleIDs[turtleID][1]}
      id="encouraging-turtle"
    />
  );
}

export default Turtle;
