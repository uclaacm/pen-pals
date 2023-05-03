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

interface GraphInputProps {}

function GraphStringElement({
  type,
  text,
  width,
  answer,
}: GraphQuestionElement) {
  if (type == 'text') {
    return <p>{text}</p>;
  } else {
    return <input />;
  }
}

function GraphLine({ textArray }: GraphQuestion) {
  //Map all elements of TextArray
  return (
    <div id="graphinput-question-container">
      <p id="graphinput-check-question">Hi</p>
      <input type="text" id="graphinput-check-box" style={{ width: '$3vw' }} />
      <p id={'graphinput-check-question'}> Bye</p>
    </div>
  );
}

function GraphInput(): JSX.Element {
  return (
    <div id="graphinput-container">
      <div id="graphinput-question-box">
        <GraphLine textArray={[]} />
      </div>
    </div>
  );
}

export default GraphInput;
