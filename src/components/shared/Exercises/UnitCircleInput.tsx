import { useState } from 'react';
import '../../../styles/Exercises/UnitCircleInput.scss';

interface UnitCircleInputProps {
  questionLabels: string[][];
  answers: number[][];
  left: boolean[][]; // T if left, F if right, can change later to string for readability
  setIsComplete: (a: boolean) => void;
}

interface UnitCircleQuestion {
  label: string;
  answer: number;
  id: number;
}

function UnitCircleInput({
  questionLabels,
  answers,
  left,
  setIsComplete,
}: UnitCircleInputProps): JSX.Element {
  function MakeQuestion({ label, id }: UnitCircleQuestion): JSX.Element {
    const handleChange = (event: { target: { value: string } }) => {
      setText(event.target.value, id);
    };
    const blank = left[id] ? 'left' : 'right';
    const question = `${label} = ${blank}`;
    return (
      <div id="ucinput-question-container">
        <p id="ucinput-check-question">{question}</p>
        <input
          type="text"
          className="ucinput-check-box"
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
      setIsComplete(true);
      return;
    }
    setCounter(counter + 1);
    setWrong(false);
    setInputText(startInputStrings);
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
        id: i,
      });
    }
  } else {
    return <h2>Done!</h2>;
  }

  //console.log(questionLabels[counter]);
  const questionOutput = questions.map(MakeQuestion);
  return (
    <div className="ucinput-container">
      <div className="ucinput-question-box">{questionOutput}</div>
      <div className="ucinput-wrong-box">
        <h3 id="ucinput-check-wrong">&nbsp;{wrongMessage(wrong)}&nbsp;</h3>
      </div>
      <div className="ucinput-check-button-container">
        <button id="ucinput-check-button" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
}

export default UnitCircleInput;
