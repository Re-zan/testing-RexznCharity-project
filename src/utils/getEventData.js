import axios from "axios";

const getEventData = async () => {
  const res = await axios.get(
    `https://re-zancharity-server-side.vercel.app/events`
  );
  return res.data;
};

export default getEventData;
