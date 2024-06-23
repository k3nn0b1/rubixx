import { ActivityItem } from '../ActivityItem';

export const ActivityList = (props) => {
  return (
    <section id='List'>
      {props.items.map((item) => <ActivityItem key={item.id} title={item.title} />)}
    </section>
  )
}
