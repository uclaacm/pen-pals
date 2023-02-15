import '../../../styles/Exercises/ExerComplete.scss';
import encouragingTurtle from '../../../assets/EncouragingTurtle-Solo.svg';

interface ExerCompleteInputs {
  exerciseName: string;
}

function ExerComplete({ exerciseName }: ExerCompleteInputs): JSX.Element {
  return (
    <div className="exercomplete-container">
      <h2>Congratulations!</h2>
      <p>You have completed the {exerciseName} exercise</p>
      <img src={encouragingTurtle} />
      <p></p>
      <button className="exercomplete-continue-button">Continue</button>
    </div>
  );
}

export default ExerComplete;
