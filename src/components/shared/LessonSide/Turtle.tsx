import encouragingTurtle from '../../../assets/EncouragingTurtle.svg';
import encouragingTurtleWork from '../../../assets/LessonSide/EncouragingTurtleDrawnToWork.svg';
import encouragingTurtleFullPoints from '../../../assets/LessonSide/EncouragingTurtleFullPoints.svg';
import encouragingTurtleGenius from '../../../assets/LessonSide/EncouragingTurtleGenius.svg';
import encouragingTurtleNiceGoing from '../../../assets/LessonSide/EncouragingTurtleNiceGoing.svg';
import encouragingTurtleSkills from '../../../assets/LessonSide/EncouragingTurtleSkills.svg';
import encouragingTurtleSuccess from '../../../assets/LessonSide/EncouragingTurtleSuccess.svg';

interface TurtleProps {
  turtleID: string;
}

interface TurtleData {
  [key: string]: [fig: string, altText: string];
}

const turtleIDs: TurtleData = {
  'full-points': [
    encouragingTurtleFullPoints,
    'Turtle saying Full points for you!',
  ],
  'you-can-do-it': [encouragingTurtle, 'Turtle saying You can do it!'],
  'numerous-skills': [
    encouragingTurtleSkills,
    'Turtle saying Your skills are numerous!',
  ],
  'your-genius': [
    encouragingTurtleGenius,
    "Turtle saying There's no end to your genius!",
  ],
  'nice-going': [encouragingTurtleNiceGoing, 'Turtle saying Nice going!'],
  'drawn-to-work': [
    encouragingTurtleWork,
    "Turtle saying I'm drawn to your work!",
  ],
  'large-success': [
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
