import Image from "next/image";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import styles from "./event-item.module.scss";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props: any) {
  const { title, image, date, location } = props.event;
  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressFormatted = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image alt={title} src={`/${image}`} width={640} height={480} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{addressFormatted}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{addressFormatted}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link="/">
            <span>Explore</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
