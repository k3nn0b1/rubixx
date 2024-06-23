import "./styles.css";

export const ActivityItem = (props) => {
  return (
    <button className="Activities" type="button">{props.title}</button>
  )
}