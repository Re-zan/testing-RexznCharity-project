"use client";
import React from "react";
import useUsersData from "@/hooks/useUsersData";
import UserDataTable from "./UserDataTable";

const UsersPage = () => {
  const [userDatas, refetch] = useUsersData();
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Our Users
        </h3>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto w-[200px] md:w-[500px] lg:w-[1000px]">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
            {/* heading  */}
            <tr>
              <th className="py-3 px-6">User</th>
              <th className="py-3 px-6">Age</th>
              <th className="py-3 px-6">Doanted</th>
              <th className="py-3 px-6">Meassage</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {/* datas */}
            {userDatas?.map((item, idx) => (
              <UserDataTable
                item={item}
                key={item._id}
                idx={idx}
                refetch={refetch}
              ></UserDataTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
