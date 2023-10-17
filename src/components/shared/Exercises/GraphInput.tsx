//import { useState } from 'react';
//import { useState } from 'react';
import '../../../styles/Exercises/GraphInput.scss';

interface GraphQuestionData {
  type: string;
  text?: string;
  width?: number;
  answer?: string;
  id?: number;
}

interface GraphQuestionGrouping {
  questionData: GraphQuestionData;
  setCorrect: (id: number, value: boolean) => void;
}

interface GraphLineGrouping {
  data: GraphLineData;
  setCorrect: (id: number, value: boolean) => void;
}

interface GraphInputProps {
  questionArray: GraphLineData[];
  nextExercise: () => void;
}

interface GraphLineData {
  textArray: GraphQuestionData[];
}

function GraphStringElement({
  questionData,
  setCorrect,
}: GraphQuestionGrouping) {
  if (questionData.type == 'text') {
    return <p id="graphinput-check-question">{questionData?.text ?? ''}</p>;
  } else {
    //const [inputText, setInputText] = useState("");
    const handleChange = (event: { target: { value: string } }) => {
      console.log(`input text: ${event.target.value}`);
      console.log(questionData?.answer ?? '');
      if (event.target.value == (questionData?.answer ?? '')) {
        console.log('Correct!');
        setCorrect(questionData?.id ?? -1, true);
      } else {
        setCorrect(questionData?.id ?? -1, false);
      }
      //setInputText(event.target.value);
    };
    return (
      <div>
        <input
          type="text"
          className="graphinput-check-box"
          style={{ width: `${(questionData?.width ?? 3) * 16}px` }}
          onChange={handleChange}
        />
      </div>
    );
  }
}

function GraphLine({ data, setCorrect }: GraphLineGrouping) {
  //Map all elements of TextArray
  const makeElement = (elementData: GraphQuestionData): JSX.Element => {
    return (
      <GraphStringElement questionData={elementData} setCorrect={setCorrect} />
    );
  };
  return (
    <div id={'graphinput-question-container'}>
      {data.textArray.map(makeElement)}
    </div>
  );
  /*return (
    <div id="graphinput-question-container">
      <GraphStringElement type={"text"} text={"Hi?"}/>
      <GraphStringElement type={"beans"} width={4} text={""}/>
      <p id={'graphinput-check-question'}> Bye</p>
    </div>
  );*/
}

function GraphInput({
  questionArray,
  nextExercise,
}: GraphInputProps): JSX.Element {
  const valueMap = new Map<number, boolean>();
  for (const question of questionArray) {
    for (const item of question.textArray) {
      if (item.type == 'input') {
        valueMap.set(item.id ?? -1, false);
      }
    }
  }
  const setValueCorrect = (id: number, value: boolean): void => {
    console.log(`Setting ${id} to ${value}`);
    valueMap.set(id, value);
  };

  const checkCorrect = (): void => {
    console.log('Checking correct');
    // @ts-ignore
    for (const i of valueMap.values()) {
      console.log(i);
      if (!i) {
        console.log(`${i} is incorrect`);
        //setWrong(true);
        return;
      }
    }
    console.log('all right!');
    nextExercise();
  };

  const makeLine = (
    data: GraphLineData,
    setCorrect: (id: number, value: boolean) => void
  ): JSX.Element => {
    return <GraphLine data={data} setCorrect={setCorrect} />;
  };
  return (
    <div id="graphinput-container">
      <div id="graphinput-question-box">
        {questionArray.map((x) => makeLine(x, setValueCorrect))}
      </div>
      <div id="graphinput-check-button-container">
        <button id="graphinput-check-button" onClick={checkCorrect}>
          Check
        </button>
      </div>
    </div>
  );
}

export default GraphInput;
