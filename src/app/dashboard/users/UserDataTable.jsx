import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import React from "react";
import { toast, Toaster } from "react-hot-toast";

const UserDataTable = ({ item, idx, refetch }) => {
  const { _id, name, email, message, age, image, role, doanted } = item;

  //serverRoute
  const basicRoute = useAxios();

  //make admin
  const handleMakeAdmin = (_id) => {
    basicRoute
      .put(`/users/admin/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${name} is now Admin`);
        }
      })
      .catch((error) => console.log(error.message));
  };
  //make donar
  const handleMakeDonar = (_id) => {
    basicRoute
      .put(`/users/donar/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${name} is now Donar`);
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <tr key={idx}>
      <Toaster></Toaster>
      <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
        {image && <Image src={image} alt={name} width={50} height={50}></Image>}

        <div>
          <span className="block text-gray-700 text-sm font-medium">
            {name}
          </span>
          <span className="block text-gray-700 text-xs">{email}</span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">{age}</td>
      <td className="px-6 py-4 whitespace-nowrap">{doanted} $ 0</td>

      <td className="px-6 py-4 whitespace-nowrap">
        {message} || yufggggggggggggggggggggg
      </td>

      <td className="text-right px-6 whitespace-nowrap">
        <p className=" text-green-600 text-center"> {role}</p>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => handleMakeAdmin(_id)}
        >
          Make Admin
        </button>
        <button
          className="py-2 leading-none px-3 font-medium text-sky-600 hover:text-sky-500 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => handleMakeDonar(_id)}
        >
          Make Donar
        </button>
      </td>
    </tr>
  );
};

export default UserDataTable;
