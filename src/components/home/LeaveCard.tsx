import Image from "next/image";
import React from "react";
interface ILeaveCard {
  startDate: string;
  endDate: string;
  days: number;
  leaveType: string;
  approved: boolean;
}
const LeaveCard = (props: ILeaveCard) => {
  const { startDate, endDate, days, leaveType, approved } = props;
  return (
    <div
      className={`pt-[15px] px-[16px] h-[140px] shadow-sm  shadow-slate-300 rounded-[4px]  flex flex-col ${
        approved ? "bg-transparent" : "bg-black border-[#FFA424] border-t-[4px]"
      } `}
    >
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-[8px]">
          <Image
            src="/assets/images/profile.png"
            alt="image"
            width={100}
            height={100}
            className="w-[40px] h-[40px] rounded-[40px]"
          />
          <p>Marks Jcob</p>
        </div>
        {approved ? (
          <button className="bg-[#6E56E0]  h-[40px] rounded-[20px] w-[109px] uppercase text-[15px]">
            Approved
          </button>
        ) : (
          <div className="flex gap-[8px] ">
            <button className="border-[#898989] border-[0.1px] h-[40px] rounded-[20px] w-[84px] uppercase  text-[15px]">
              Reject
            </button>
            <button className="bg-[#6E56E0]  h-[40px] rounded-[20px] w-[109px] uppercase  text-[15px]">
              Approve
            </button>
          </div>
        )}
      </div>
      <div className="p-[8px] flex gap-[40px] mt-[8px] text-[15px]">
        <div>
          <div className="flex gap-[8px]">
            <p className=" w-[108px]">Start date</p>
            <p>{startDate}</p>
          </div>
          <div className="flex gap-[8px]">
            <p className=" w-[108px]">End date</p>
            <p>{endDate}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-[8px]">
            <p className=" w-[108px]">Day(s)</p>
            <p>{days}</p>
          </div>
          <div className="flex gap-[8px]">
            <p className=" w-[108px]">Leave type</p>
            <p>{leaveType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveCard;
