//import { useState } from 'react';
import '../../../styles/Exercises/UnitCircleInput.scss';

function UnitCircleInput(): JSX.Element {
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
      </div>
    </div>
  );
}
export default UnitCircleInput;
