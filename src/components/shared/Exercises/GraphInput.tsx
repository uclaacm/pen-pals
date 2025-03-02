import { useState, useEffect } from 'react';
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
  const [inputText, setInputText] = useState('');

  // reset input when questionData changes (new level/question set)
  useEffect(() => {
    setInputText('');
  }, [questionData]);

  if (questionData.type == 'text') {
    return <p id="graphinput-check-question">{questionData?.text ?? ''}</p>;
  } else {
    const handleChange = (event: { target: { value: string } }) => {
      if (event.target.value == (questionData?.answer ?? '')) {
        setCorrect(questionData?.id ?? -1, true);
      } else {
        setCorrect(questionData?.id ?? -1, false);
      }
      setInputText(event.target.value);
    };
    return (
      <div>
        <input
          type="text"
          className="graphinput-check-box"
          value={inputText}
          style={{ width: `${(questionData?.width ?? 3) * 16}px` }}
          onChange={handleChange}
        />
      </div>
    );
  }
}

function GraphLine({ data, setCorrect }: GraphLineGrouping) {
  // Map all elements of TextArray
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
}

function GraphInput({
  questionArray,
  nextExercise,
}: GraphInputProps): JSX.Element {
  const [valueMap, setValueMap] = useState(new Map<number, boolean>());

  const setValueCorrect = (id: number, value: boolean): void => {
    setValueMap(valueMap.set(id, value));
  };

  const checkCorrect = (): void => {
    const valuesArray = Array.from(valueMap.values());
    for (const i of valuesArray) {
      if (!i) {
        setWrong(true);
        return;
      }
    }
    setWrong(false);
    nextExercise();
  };

  function wrongMessage(isWrong: boolean) {
    if (isWrong) {
      return "That's not quite right. Try again!";
    } else {
      return;
    }
  }

  const [wrong, setWrong] = useState(false);

  const makeLine = (
    data: GraphLineData,
    setCorrect: (id: number, value: boolean) => void
  ): JSX.Element => {
    return <GraphLine data={data} setCorrect={setCorrect} />;
  };
  return (
    <div id="graphinput-container">
      <div id="graphinput-question">
        Fill in the blanks to move the cursor along the path!
      </div>
      <div id="graphinput-check-question"></div>
      <div id="graphinput-question-box">
        {questionArray.map((x) => makeLine(x, setValueCorrect))}
      </div>
      <div className="axinput-wrong-box">
        <h3 id="axinput-check-wrong">&nbsp;{wrongMessage(wrong)}&nbsp;</h3>
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
