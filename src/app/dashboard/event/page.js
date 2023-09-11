"use client";
import useEventsData from "@/hooks/useEventsData";
import React, { useRef, useState } from "react";
import EventTable from "./EventTable";
import { Toaster } from "react-hot-toast";
import MakeEventFrom from "./MakeEventFrom";
import EventModal from "@/components/modals/EventModal";

export const metadata = {
  title: " Dashboard | Events",
};
const EventPage = () => {
  const [eventsData, refetch] = useEventsData();

  //satates
  const [updateData, setUpdateData] = useState(null);
  //modal
  const modalRef = useRef(null);
  const openModal = (item) => {
    setUpdateData(item);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg mx-0 lg:mx-auto">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl py-3">
          Our Events
        </h3>
        <MakeEventFrom refetch={refetch}></MakeEventFrom>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto w-[200px] md:w-[500px] lg:w-[1100px]">
        <Toaster></Toaster>
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
            {/* heading  */}
            <tr>
              <th className="py-3 px-6">Serial No</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Event Name</th>
              <th className="py-3 px-6">Shot Title</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Location</th>

              <th className="py-3 px-6">Decision</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {/* datas */}
            {eventsData?.map((item, idx) => (
              <EventTable
                item={item}
                key={item._id}
                idx={idx}
                refetch={refetch}
                openModal={openModal}
              ></EventTable>
            ))}
          </tbody>
        </table>
        <EventModal
          modalRef={modalRef}
          closeModal={closeModal}
          updateData={updateData}
          refetch={refetch}
        >
          {" "}
        </EventModal>
      </div>
    </div>
  );
};

export default EventPage;
