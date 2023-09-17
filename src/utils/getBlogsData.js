import axios from "axios";

const getBlogsData = async () => {
  const res = await axios.get(
    `https://re-zancharity-server-side.vercel.app/blogs`
  );
  return res.data;
};

export default getBlogsData;
