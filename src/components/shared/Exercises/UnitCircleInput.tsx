//import { useState } from 'react';
import '../../../styles/Exercises/UnitCircleInput.scss';

function UnitCircleInput(): JSX.Element {
  return (
    <div id="unitcircle-question-container">
      Type the correct numbers into the blanks below!
      <p id="unitcircle-check-question"> </p>
      <p>
        {' '}
        <i>A</i> = left
        <input
          type="text"
          className="unitcircle-check-box"
          //onChange={handleChange}
          //value={inputText[id]}
        />
      </p>
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
    </div>
  );
}
export default UnitCircleInput;
