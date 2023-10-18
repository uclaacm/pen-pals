import { useState } from 'react';
import '../../../styles/Exercises/GraphInput.scss';

interface GraphInput {
  questionLabels: string[][];
  answers: number[][];
  nextExercise: () => void;
}
function GraphInput(): JSX.Element {
    return (
      <div id="unitcircle-container">
      <div id="unitcircle-prompt-question ">
        Type the correct numbers into the blanks below!
        <p></p>
      </div>

      <div className="unitcircle-question-container">
        <div className="unitcircle-check-question">
          {' '}
          <i>A</i> = left
          <input
            type="text"
            className="unitcircle-check-box"
            //onChange={handleChange}
            //value={inputText[id]}
          />
        </div>
        <div className="unitcircle-check-question">
          {' '}
          <i>B</i> = left
          <input
            type="text"
            className="unitcircle-check-box"
            //onChange={handleChange}
            //value={inputText[id]}
          />
        </div>
        <div className="unitcircle-check-question">
          {' '}
          <i>C</i> = left
          <input
            type="text"
            className="unitcircle-check-box"
            //onChange={handleChange}
            //value={inputText[id]}
          />
        </div>
      </div>
    </div>
  );
  }
  export default GraphInput;
  