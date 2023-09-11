import CommonText from "@/components/CommonText";
import SignUpFrom from "./SignUpFrom";

//page title
export const metadata = {
  title: "Re-zanCharity | SignUp",
};

const SingInPage = () => {
  return (
    <section className="my-20 shadow-2xl my_container py-16">
      <CommonText title="SignUp Now" postion="center"></CommonText>

      {/* form start */}
      <SignUpFrom></SignUpFrom>
    </section>
  );
};

export default SingInPage;
