import LessonSide from './shared/LessonSide';
import ExerciseSide from './shared/ExerciseSide';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  return (
    <main>
      <LessonSide />
      <ExerciseSide />
    </main>
  );
}

export default App;
