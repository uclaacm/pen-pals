import { useState } from 'react';
import CongratsPage from './shared/Congratulations';
import ExerciseSide from './shared/ExerciseSide';
import LessonSide from './shared/LessonSide/LessonSide';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  const [exerciseCount, setExerciseCount] = useState(0);
  // const [completeExercises, setCompleteExercises] = useState(0);

  const updateLevel = (newLevel: number): void => {
    setExerciseCount(newLevel - 1);
  };

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
        <LessonSide levelNum={exerciseCount + 1} updateLevel={updateLevel} />
        <ExerciseSide
          ExercisesNum={exerciseCount}
          incrementExercise={() => setExerciseCount(exerciseCount + 1)}
        />
      </main>
    </div>
  );
}

export default App;
