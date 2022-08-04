import styles from "./event-list.module.scss";
import EventItem from "./event-item";

function EventList(props: any) {
  return (
    <ul className={styles.list}>
      {props.events.map((event: any) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
}

export default EventList;
