//import { useState } from 'react';
import '../../../styles/Exercises/UnitCircleInput.scss';

interface UnitCircleInputProps {
  nextExercise: () => void;
}

function UnitCircleInput({ nextExercise }: UnitCircleInputProps): JSX.Element {
  return (
    <div id="unitcircle-question-container">
      <div id="unitcircle-check-question">
        Type the correct numbers into the blanks below!
        
      </div>

      <div id="unitcircle-check-question">
        {' '}
        <i>A</i> = left
        <input
          type="text"
          className="unitcircle-check-box"
          //onChange={handleChange}
          //value={inputText[id]}
        />
        <p>
          {' '}
          <i>B</i> = right
          <input
            type="text"
            className="unitcircle-check-box"
            //onChange={handleChange}
            //value={inputText[id]}
          />
        </p>
        <p>
          {' '}
          <i>C</i> = right
          <input
            type="text"
            className="unitcircle-check-box"
            //onChange={handleChange}
            //value={inputText[id]}
          />
        </p>
        <div id="unitcircleinput-check-button-container">
          <button id="unitcircleinput-check-button" onClick={nextExercise}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
export default UnitCircleInput;
