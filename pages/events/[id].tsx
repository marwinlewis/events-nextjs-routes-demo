import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

const EventPage: NextPage = () => {
  const router = useRouter();
  const eventID = router.query.id;
  const event = getEventById(eventID);

  if (!event) {
    return (
      <div className="center">
        <ErrorAlert>No event found!</ErrorAlert>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventPage;
