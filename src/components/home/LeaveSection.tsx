import { card } from "../../../constants/card";
import LeaveCard from "./LeaveCard";

const LeaveSection = () => {
  return (
    <section className="w-[673px] pl-[40px] mt-5">
      {/* View Changer */}
      <div className="flex justify-between items-center mb-[36px]">
        <h1 className="text-[28px] font-[700]">Leave Requests</h1>
        <div className="flex gap-[4px]">
          <div className="bg-[#6E56E0] rounded-tl-[40px] rounded-bl-[40px] h-[40px] w-[120px] flex justify-center items-center">
            <p>List view</p>
          </div>
          <div className="bg-[#272727] text-[#898989] rounded-tr-[40px] rounded-br-[40px] h-[40px] w-[120px] flex justify-center items-center">
            <p>Month view</p>
          </div>
        </div>
      </div>
      {/* Leave list */}
      <div className="flex flex-col gap-[12px] h-[500px] overflow-auto">
        {card?.map((item, index) => (
          <LeaveCard
            days={item.days}
            startDate={item.startDate}
            endDate={item.endDate}
            leaveType={item.leaveType}
            approved={item.approved}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default LeaveSection;
