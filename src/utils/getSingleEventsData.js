import axios from "axios";

const getSingleEventsData = async (id) => {
  const res = await axios(
    `https://re-zancharity-server-side.vercel.app/events/${id}`
  );
  return res.data;
};

export default getSingleEventsData;
