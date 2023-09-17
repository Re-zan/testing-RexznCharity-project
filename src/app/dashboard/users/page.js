import UserTable from "./UserTable";

export const metadata = {
  title: " Dashboard | Users",
};
const UsersPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Our Users
        </h3>
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UsersPage;
