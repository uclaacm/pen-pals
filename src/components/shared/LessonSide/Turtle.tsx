import encouragingTurtle from '../../../assets/EncouragingTurtle.svg';
import encouragingTurtleFullPoints from '../../../assets/EncouragingTurtleFullPoints.svg'
import encouragingTurtleSkills from '../../../assets/EncouragingTurtleSkills.svg';

interface TurtleProps {
    turtleID: string;
}

interface TurtleData {
    [key: string]: [fig: any, altText: string];
}

const turtleIDs: TurtleData = {
    "full-points": [encouragingTurtleFullPoints, "Turtle saying Full points for you!"],
    "you-can-do-it": [encouragingTurtle, "Turtle saying You can do it!"],
    "skills": [encouragingTurtleSkills, "Turtle saying Your skills are numerous!"]
}

function Turtle({ turtleID }: TurtleProps): JSX.Element {
    return (
        <img
            src={turtleIDs[turtleID][0]}
            alt={turtleIDs[turtleID][1]}
            id="encouraging-turtle"
        />
    )
}

export default Turtle;