function WorkoutCard({ title, description, time, onComplete }) {
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
        <button>Start</button>
        <button onClick={onComplete}>Stop</button>
      </p>
    </article>
  );
}

export default WorkoutCard;
