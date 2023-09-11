import axios from "axios";

const getSinlgeBlogData = async (id) => {
  const res = await axios.get(
    `https://re-zancharity-server-side.vercel.app/blogs/${id}`
  );
  return res.data;
};

export default getSinlgeBlogData;
