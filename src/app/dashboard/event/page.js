import EventContent from "./EventContent";

export const metadata = {
  title: " Dashboard | Events",
};
const EventPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <EventContent></EventContent>
    </div>
  );
};

export default EventPage;
