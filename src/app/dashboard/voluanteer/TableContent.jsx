import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import React from "react";
import { toast, Toaster } from "react-hot-toast";

const TableContent = ({ item, idx, refetch }) => {
  const { _id, name, email, message, age, phone_number, image, role } = item;

  const basicRoute = useAxios();

  //make voluanteer
  const handleMakeVlouanteer = (_id) => {
    basicRoute
      .put(`/vlounters/voluanteer/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${name} is now a voluanteer`);
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

      <td className="px-6 py-4 whitespace-nowrap">{phone_number}</td>
      <td className="px-6 py-4 whitespace-nowrap">{age}</td>
      <td className="px-6 py-4 whitespace-nowrap">{message}</td>

      <td className="text-right px-6 whitespace-nowrap">
        {role ? (
          <p className=" text-green-600 text-center"> {role}</p>
        ) : (
          <button
            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
            onClick={() => handleMakeVlouanteer(_id)}
          >
            Make Voluanteer
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableContent;
