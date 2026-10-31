export default function TaskCard(props) {
  return (
    <div className={`task-card ${props.status ? `task-card--${props.status}` : ''}`}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Status: {props.status}</p>
      <div className="task-card__actions"> 
        {props.status === "completed" && (
          <button onClick={props.onReset}>
            Reset
          </button>
        )}
        {props.status === "not-started" && (
          <button onClick={props.onStart}>
            Start
          </button>
        )}
        {props.status === "in-progress" && (
          <button onClick={props.onComplete}>
            Complete
          </button>
        )}
        <button onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}