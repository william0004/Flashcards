const Streak = (props) => {
  return (
    <div className="streak-container">
      <h2>Current Streak: {props.current}</h2>
      <h2>Best Streak: {props.best}</h2>
    </div>
  );
}

export default Streak;