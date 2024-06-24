import "./styles.css";


export const ActivityItem = (props) => {
  return (
    <div>
      <button className="Activities" type="button" onClick={props.onClick}>
        {props.activity.title}
      </button>
      
    </div>
  );
};
