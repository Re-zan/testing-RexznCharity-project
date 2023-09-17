import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";

const EventTable = ({ item, idx, refetch, openModal }) => {
  //basic route
  const basicRoute = useAxios();
  //data
  const {
    _id,
    title,
    short_title,
    description,
    image,
    date,
    location,
    status,
  } = item;

  //status update
  const handleStatusUpcoming = (_id) => {
    basicRoute
      .patch(`/events/status/upcoming/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success(`${title} is our upcoming event`);
          refetch();
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleStatusCancel = (_id) => {
    basicRoute
      .patch(`/events/status/cancel/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.error(`${title} is cancel canceled now`);
          refetch();
        }
      })
      .catch((error) => console.log(error.message));
  };

  //delete item
  const handleDelete = (_id) => {
    basicRoute
      .delete(`/events/${_id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success(`${title} is delete`);
          refetch();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <tr key={idx} className="text-center">
      <td className="pr-6 py-4 whitespace-nowrap">{++idx}</td>
      <td className="pr-6 py-4 whitespace-nowrap">
        {image && (
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            layout="responsive"
          ></Image>
        )}
      </td>
      <td className="pr-6 py-4 whitespace-nowrap">{title}</td>
      <td className="pr-6 py-4 whitespace-nowrap w-28 h-14">
        {short_title?.slice(0, 20)}.......
      </td>
      <td className="pr-6 py-4 whitespace-nowrap w-28 h-14">
        {description?.slice(0, 20)}.......
      </td>
      <td
        className={`pr-6 py-4 whitespace-nowrap  ${
          status === "upcoming" ? "text-green-600 " : " text-red-500 "
        }`}
      >
        {status || "not decided yet"}
      </td>
      <td className="pr-6 py-4 whitespace-nowrap ">{date}</td>
      <td className="pr-6 py-4 whitespace-nowrap  ">{location}</td>

      <td className="pr-6 py-4 whitespace-nowrap">
        <button
          className="py-2 leading-none px-3 font-medium text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => handleStatusCancel(_id)}
        >
          Make Cancel
        </button>
        <button
          className=" mx-4 py-2 leading-none px-3 font-medium text-green-600 bg-green-50 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => handleStatusUpcoming(_id)}
        >
          Make Confrim
        </button>
      </td>

      <td className="text-right whitespace-nowrap">
        <button
          className="py-2 leading-none px-3 font-medium text-sky-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => openModal(item)}
        >
          update
        </button>
        <button
          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EventTable;
