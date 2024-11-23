import { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { workouts } from "./workouts.js";

function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompeltedWorkouts) => [
      ...prevCompeltedWorkouts,
      workoutTitle,
    ]);
  }
  return (
    <main>
      <header>
        <h1>Home Workouts</h1>
        <p>Workout at home and get your results</p>
      </header>
      <section>
        <h2>Choose a workout</h2>
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.title}
            {...workout}
            onComplete={() => handleWorkoutComplete(workout.title)}
          />
        ))}
      </section>
      <section>
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((completedWorkout, index) => (
            <li key={index}>{completedWorkout}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
