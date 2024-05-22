import clsx from "clsx";
import React from "react";

const TimelineItem = ({ index, time, activities }) => {
  return (
    <div
      className={clsx(
        "w-full min-h-[5rem] relative flex flex-row items-center justify-center gap-[10%] ml:gap-[15%]",
        index % 2 !== 0 && "flex-row-reverse"
      )}
    >
      <div
        className={clsx(
          "w-[18.72rem] md:w-[23.4rem] lg:w-[29.25rem] text-[#BE3049] text-[1.5rem] ssm:text-[1.75rem] font-bold",
          index % 2 === 0 ? "text-right" : "text-left"
        )}
      >
        {time}
      </div>
      <div className="absolute h-full z-[1] flex items-center justify-center">
        <div className="w-[0.2rem] md:w-1 lg:w-[0.3125rem] h-full absolute z-[1] bg-[#ed945b]" />
        <div
          className={clsx(
            "absolute z-[2] bg-white rounded-full",
            "w-[2.24rem] h-[2.24rem]",
            "md:w-[2.8rem] md:h-[2.8rem]",
            "lg:w-14 lg:h-14"
          )}
        />
        <div
          className={clsx(
            index % 2 === 0 ? "bg-[#205AB6]" : "bg-[#C41E24]",
            "absolute z-[3] rounded-full",
            "w-[1.28rem] h-[1.28rem]",
            "md:w-[1.6rem] md:h-[1.6rem]",
            "lg:w-8 lg:h-8"
          )}
        />
      </div>
      <ul
        className={clsx(
          "list-disc space-y-4 w-[18.72rem] md:w-[23.4rem] lg:w-[29.25rem]"
        )}
      >
        {activities.map((activity, index) => (
          <li
            key={index}
            className="text-[#333] text-justify text-[1.25rem] ssm:text-[1.5rem] font-medium"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
