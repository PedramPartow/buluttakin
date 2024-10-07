import React, { memo, useState } from "react";
import Person from "assets/images/Person.svg";

const DashboardMeetingCard = React.lazy(() => import("./DashboardMeetingCard"));
const Button = React.lazy(() => import("./general/Button"));
const Modal = React.lazy(() => import("./general/Modal"));
const NewMeeting = React.lazy(() => import("./NewMeeting"));

const MemoDashboardMeeting = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [meetingsList, setMeetingsList] = useState<Array<MeetingDetails>>([
    {
      src: Person,
      name: "Martin Stanton",
      subject: "Designly 2.0 is about to launch",
      date: "Dec 19 at 8:01 PM",
    },
  ]);

  const changeModalStatus = () => {
    setModalStatus((prev) => !prev);
  };

  return (
    <>
      <div className="w-full block">
        <div className="xs:grid sm:flex gap-4 items-center sm:justify-between mb-3">
          <h2 className="font-bold text-gray-900 text-xl text-nowrap">
            Meeting Time
          </h2>
          <Button
            label="Add Meeting"
            onClick={changeModalStatus}
            btnClass="outlined"
            customClass="max-md:w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 overflow-y-auto">
          {meetingsList.length &&
            meetingsList.map((meeting, index) => (
              <DashboardMeetingCard
                key={index}
                src={meeting.src}
                name={meeting.name}
                subject={meeting.subject}
                date={meeting.date}
              />
            ))}
        </div>
      </div>
      {modalStatus && (
        <Modal isOpen={modalStatus} onClose={changeModalStatus}>
          <NewMeeting
            onClose={changeModalStatus}
            setMeetings={setMeetingsList}
          />
        </Modal>
      )}
    </>
  );
};

const DashboardMeeting = memo(MemoDashboardMeeting);

export default DashboardMeeting;
