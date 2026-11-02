export default function TaskCard(props) {
  return (
    <article className={`task-card ${props.status ? `task-card--${props.status}` : ''}`}>
      <h3>{props.title}</h3>
      <span className="task-card__subject">{props.subject}</span>
      <p>{props.description}</p>
      <p className="task-card__status">Status: <span>{props.status.replace('-', ' ')}</span></p>
      <div className="task-card__actions"> 
        <button type="button" onClick={props.onEdit}>Edit</button>
        {props.status === "completed" && (
          <button type="button" onClick={props.onReset}>
            Reset
          </button>
        )}
        {props.status === "not-started" && (
          <button type="button" onClick={props.onStart}>
            Start
          </button>
        )}
        {props.status === "in-progress" && (
          <button type="button" onClick={props.onComplete}>
            Complete
          </button>
        )}
        <button type="button" className="task-card__delete" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </article>
  )
}