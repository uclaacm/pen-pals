import { useState } from 'react';
import '../../../styles/Exercises/AxisInput.scss';

interface AxisInputProps {
  questionLabels: string[][];
  answers: number[][];
}

interface AxisQuestion {
  label: string;
  answer: number; // Should change to being strings
  render: boolean;
  state: any[]; //This sucks lol
}

function AxisInput({ questionLabels, answers }: AxisInputProps): JSX.Element {
  function MakeQuestion({ label, render, state }: AxisQuestion): JSX.Element {
    const handleChange = (event: { target: { value: any } }) => {
      state[1](event.target.value);
    };
    if (render) {
      return (
        <div id="question-container">
          <p id="check-question">{label}: </p>
          <input
            type="text"
            id="check-box"
            onChange={handleChange}
            value={state[0]}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const [counter, setCounter] = useState(0);
  const [wrong, setWrong] = useState(false);
  let questions = [];
  let maxLength = 0;
  for (let i = 0; i < questionLabels.length; i++) {
    if (maxLength < questionLabels[i].length) {
      maxLength = questionLabels.length + 1;
    }
  }
  const typedInput: any[] = [];
  for (let i = 0; i < maxLength; i++) {
    const inputState = useState(0);
    typedInput.push(inputState);
  }
  for (let i = 0; i < questionLabels[counter].length; i++) {
    questions.push({
      label: questionLabels[counter][i],
      answer: answers[counter][i],
      render: true,
      state: typedInput[i],
    });
  }
  function incCounter() {
    for (let i = 0; i < typedInput.length; i++) {
      if (typedInput[i][0] != answers[counter][i]) {
        alert(answers[i]);
        setWrong(true);
        return;
      }
    }
    setCounter(counter + 1);
    alert('Hi!');
    questions = [];
    for (let i = 0; i < questionLabels[counter].length; i++) {
      questions.push({
        label: questionLabels[counter][i],
        answer: answers[counter][i],
        render: true,
        state: typedInput[i],
      });
    }
  }

  function wrongMessage(isWrong: boolean) {
    if (isWrong) {
      return "That's not quite right. Try again!";
    } else {
      return;
    }
  }

  //console.log(questionLabels[counter]);
  const questionOutput = questions.map(MakeQuestion);
  return (
    <div className="axinput-container">
      <h2>What is the difference between a monkey and a bee?</h2>
      <div className="axinput-questionbox">{questionOutput}</div>
      <div className="axinput-wrongbox">
        <h3 id="check-wrong">&nbsp;{wrongMessage(wrong)}&nbsp;</h3>
      </div>
      <button id="check-button" onClick={incCounter}>
        Check
      </button>
    </div>
  );
}

export default AxisInput;
