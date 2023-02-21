import '../../../styles/Exercises/ExerciseComplete.scss';
import encouragingTurtle from '../../../assets/EncouragingTurtle-Solo.svg';

interface ExerciseCompleteInputs {
  exerciseName: string;
  onComplete: () => void;
}

function ExerciseComplete({
  exerciseName,
  onComplete,
}: ExerciseCompleteInputs): JSX.Element {
  return (
    <div className="exercisecomplete-container">
      <h2>Congratulations!</h2>
      <p>You have completed the {exerciseName} exercise</p>
      <img src={encouragingTurtle} />
      <p></p>
      <button className="exercisecomplete-continue-button" onClick={onComplete}>
        Continue
      </button>
    </div>
  );
}

export default ExerciseComplete;
