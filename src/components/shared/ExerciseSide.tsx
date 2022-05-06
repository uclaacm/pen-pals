
import '../../styles/ExerciseSide.scss';
// import AxisExercise from './Exercises/AxisExercise'; // from Arush's code

function ExerciseSide(): JSX.Element {
  return (
    <section id = "exercise-side-container">
      <div id = "exercise-box">

        <h1> Type the correct numbers into the blanks below! </h1>
        <h1> A = (2,0) </h1>
        <h1> B = (-2,0) </h1>
        <h1> C = (-1,0) </h1>

      </div>

    
      <button id = "button"> Check </button>

    </section>
  );
}


export default ExerciseSide;