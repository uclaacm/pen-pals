import '../../../styles/Exercises/GraphInput.scss';

interface GraphQuestionElement {
  type: string;
  text?: string;
  width?: number;
  answer?: string;
}

interface GraphQuestion {
  textArray: GraphQuestionElement[];
}

interface GraphInputProps {
  questionArray: GraphQuestion[];
  nextExercise: () => void;
}

function GraphStringElement({ type, text, width }: GraphQuestionElement) {
  if (type == 'text') {
    return <p id="graphinput-check-question">{text}</p>;
  } else {
    return (
      <input
        type="text"
        className="graphinput-check-box"
        style={{ width: `${width * 16}px` }}
      />
    );
  }
}

function GraphLine({ textArray }: GraphQuestion) {
  //Map all elements of TextArray
  const makeElement = (elementData: GraphQuestionElement): JSX.Element => {
    return (
      <GraphStringElement
        type={elementData?.type}
        text={elementData?.text}
        width={elementData?.width}
        answer={elementData?.answer}
      />
    );
  };
  return (
    <div id={'graphinput-question-container'}>{textArray.map(makeElement)}</div>
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
  const makeLine = (lineArray: GraphQuestion): JSX.Element => {
    return <GraphLine textArray={lineArray.textArray} />;
  };
  return (
    <div id="graphinput-container">
      <div id="graphinput-question-box">{questionArray.map(makeLine)}</div>
      <div id="graphinput-check-button-container">
        <button id="graphinput-check-button" onClick={nextExercise}>
          Check
        </button>
      </div>
    </div>
  );
  /*
  return (
    <div id="graphinput-container">
      <div id="graphinput-question-box">
        <GraphLine
          textArray={[
            { text: 'Hi!', type: 'text' },
            { type: 'input', width: 10 },
          ]}
        />
      </div>
    </div>
  );*/
}

export default GraphInput;
