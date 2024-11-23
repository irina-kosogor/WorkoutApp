import { useRef } from "react";

function WorkoutCard({ title, description, time, onComplete }) {
  let timer = useRef();

  function handleStartWorkout() {
    timer.current = setTimeout(() => {
      handleStopWorkout();
    }, time);
  }

  function handleStopWorkout() {
    clearTimeout(timer.current);
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        {time / 1000}
        {time / 1000 > 1 ? " seconds" : " second"} = {time / 1000 / 60}
        {time / 1000 / 60 > 1 ? " minutes" : " minute"}
      </p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}

export default WorkoutCard;
