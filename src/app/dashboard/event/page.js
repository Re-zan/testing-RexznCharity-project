import EventCreateTable from "./EventCreateTable";

export const metadata = {
  title: " Dashboard | Events",
};
const EventPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <EventCreateTable></EventCreateTable>
    </div>
  );
};

export default EventPage;
