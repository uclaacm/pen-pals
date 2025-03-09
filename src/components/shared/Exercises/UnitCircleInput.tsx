import { useState } from 'react';
import '../../../styles/Exercises/UnitCircleInput.scss';

interface UnitCircleInputProps {
  nextExercise: () => void;
  answers: number[][];
  questionLabels: string[][];
  directions: string[][];
}

interface CircleQuestion {
  label: string;
  answer: number; // Should change to being strings
  direction: string;
  id: number; // This sucks lol!
}

function UnitCircleInput({
  nextExercise,
  answers,
  questionLabels,
  directions,
}: UnitCircleInputProps): JSX.Element {
  function MakeQuestion({ label, id, direction }: CircleQuestion): JSX.Element {
    const handleChange = (event: { target: { value: string } }) => {
      setText(event.target.value, id);
    };
    /* lines 25-35, try to get component to look like this */
    return (
      <div id="unitcircle-question-container" key={id}>
        <p id="unitcircle-check-question">
          {label} = {direction}{' '}
        </p>
        <input
          type="text"
          className="unitcircle-check-box"
          onChange={handleChange}
          value={inputText[id]}
        />
      </div>
    );
  }

  function checkAnswer() {
    // Invoked to check answers and switch to the next question or set the answer wrong
    for (let i = 0; i < answers[counter].length; i++) {
      if (parseInt(inputText[i]) != answers[counter][i]) {
        setWrong(true);
        return;
      }
    }
    if (counter == questionLabels.length - 1) {
      setIsDone(true);
      //setIsComplete(true);
      nextExercise();
      return;
    }
    setCounter(counter + 1);
    setWrong(false);
    setInputText(startInputStrings);
    nextExercise();
  }

  function wrongMessage(isWrong: boolean) {
    if (isWrong) {
      return "That's not quite right. Try again!";
    } else {
      return;
    }
  }

  const [counter, setCounter] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const questions = [];
  const startInputStrings: string[] = [];
  for (let i = 0; i < questionLabels[counter].length; i++) {
    startInputStrings.push('');
  }
  const [inputText, setInputText] = useState<string[]>(startInputStrings);
  function setText(text: string, id: number) {
    const tempInputStrings = [...inputText];
    tempInputStrings[id] = text;
    setInputText(tempInputStrings);
  }

  if (!isDone) {
    for (let i = 0; i < questionLabels[counter].length; i++) {
      questions.push({
        label: questionLabels[counter][i],
        answer: answers[counter][i],
        direction: directions[counter][i],
        id: i,
      });
    }
  } else {
    return <h2>Done!</h2>;
  }

  const questionOutput = questions.map(MakeQuestion);
  return (
    <div className="unitcircle-question-container">
      <div id="unitcircle-question">
        Type the correct numbers into the blanks below!
      </div>
      <div className="unitcircle-question-box">{questionOutput}</div>
      <div className="unitcircle-wrong-box">
        <h3 id="unitcircle-check-wrong">&nbsp;{wrongMessage(wrong)}&nbsp;</h3>
      </div>
      <div className="unitcircleinput-check-button-container">
        <button id="unitcircleinput-check-button" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
}
export default UnitCircleInput;
