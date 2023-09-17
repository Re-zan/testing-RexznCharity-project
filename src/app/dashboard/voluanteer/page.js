import VoluanteerTable from "./VoluanteerTable";

export const metadata = {
  title: " Dashboard | Voluanteer",
};

const VoluanteerPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Our Volunanteer Team members
        </h3>
      </div>
      <VoluanteerTable></VoluanteerTable>
    </div>
  );
};

export default VoluanteerPage;
