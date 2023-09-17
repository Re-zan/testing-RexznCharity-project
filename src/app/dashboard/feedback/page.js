import FeedbackFrom from "./FeedbackFrom";

export const metadata = {
  title: "Dashboard | Feedback",
};

const FeedbackPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8 mx-auto mt-5">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Shaping Our Future with Your Thoughts and Insights
        </h3>
      </div>
      <FeedbackFrom></FeedbackFrom>
    </div>
  );
};

export default FeedbackPage;
