import ExerciseSide from './shared/ExerciseSide';
import Footer from './shared/Footer';
import LessonSide from './shared/LessonSide';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  return (
    <div>
      <main>
        <LessonSide />
        <ExerciseSide />
      </main>
    </div>
  );
}

export default App;
