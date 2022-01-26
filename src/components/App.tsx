import ExerciseSide from './shared/ExerciseSide';
import LessonSide from './shared/LessonSide';
import '../assets/WestwoodSans-Regular.ttf';
import Footer from './shared/Footer';

function App(): JSX.Element {
  return (
    <div>
    <main>
      <LessonSide />
      <ExerciseSide />
    </main>
    <Footer />
    </div>
  );
}

export default App;
