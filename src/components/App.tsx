import { useState } from 'react';
import CongratsPage from './shared/Congratulations';
import ExerciseSide from './shared/ExerciseSide';
import LessonSide from './shared/LessonSide';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [exerciseCount, setExerciseCount] = useState(0);
  if (exerciseCount == 5) {
    return (
      <main>
        <CongratsPage />
      </main>
    );
  }
  return (
    <div>
      <main>
        <LessonSide 
          levelNum={exerciseCount+1}
        />
        <ExerciseSide
          incrementExercise={() => setExerciseCount(exerciseCount + 1)}
        />
      </main>
    </div>
  );
}

export default App;
