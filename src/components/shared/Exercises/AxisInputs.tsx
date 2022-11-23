import { useState } from 'react';
import '../../../styles/Exercises/AxisInput.scss';

interface AxisInputProps {
  questionLabels: string[][];
  answers: number[][];
  setIsComplete: (a: boolean) => void;
}

interface AxisQuestion {
  label: string;
  answer: number; // Should change to being strings
  id: number; //This sucks lol
}

function AxisInput({
  questionLabels,
  answers,
  setIsComplete,
}: AxisInputProps): JSX.Element {
  function MakeQuestion({ label, id }: AxisQuestion): JSX.Element {
    const handleChange = (event: { target: { value: string } }) => {
      setText(event.target.value, id);
    };
    return (
      <div id="axinput-question-container">
        <p id="axinput-check-question">{label}: </p>
        <input
          type="text"
          className="axinput-check-box"
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
    <div className="axinput-container">
      <div className="axinput-question-box">{questionOutput}</div>
      <div className="axinput-wrong-box">
        <h3 id="axinput-check-wrong">&nbsp;{wrongMessage(wrong)}&nbsp;</h3>
      </div>
      <div>
        <button id="axinput-check-button" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
}

export default AxisInput;