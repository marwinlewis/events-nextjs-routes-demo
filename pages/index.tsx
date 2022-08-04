import type { NextPage } from "next";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const Homepage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Homepage</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Homepage;
