import React from "react";
import TimelineItem from "../components/TimelineItem";
import clsx from "clsx";

const data = [
  {
    time: "20/2/2024 - 26/2/2024",
    activities: [
      "Tham khảo các ứng dụng quản lý cửa hàng hiện có trên các chợ ứng dụng, tìm hiểu cơ chế, giao diện của các tựa ứng dụng phổ biến cùng thể loại",
      "Nghiên cứu xu hướng của người dùng và dự đoán trong tương lai, ở thời điểm phát hành…",
    ],
  },
  {
    time: "27/2/2024 - 4/3/2024",
    activities: [
      "Thu thập và phân tích yêu cầu của khách hàng",
      "Phỏng vấn, đánh giá và xử lý các thắc mắc và thống nhất giữa đôi bên",
    ],
  },
  {
    time: "5/3/2024 - 12/3/2024",
    activities: [
      "Lập kế hoạch chung cho toàn bộ dự án, bao gồm phân chia các khoảng thời gian và chi phí, mô hình quản lý dự án ",
      "Nghiên cứu các tài liệu, công cụ thiết kế app, các sơ đồ usecase,…",
      "Về lựa chọn công cụ, ngôn ngữ phát triển: tìm hiểu ngôn ngữ Java, thư viện Java Swing và Ojdbc11",
    ],
  },
  {
    time: "13/3/2024 - 19/3/2024",
    activities: ["Xây dựng giao diện cho quản lý app"],
  },
  {
    time: "20/3/2024 - 26/3/2024",
    activities: ["Xây dựng giao diện cho quản lý Khách hàng"],
  },
  {
    time: "27/3/2024 - 2/4/2024",
    activities: ["Xây dựng giao diện cho quản lý Nhân viên"],
  },
  {
    time: "3/4/2024 - 9/4/2024",
    activities: ["Xây dựng giao diện cho quản lý Hóa đơn"],
  },
  {
    time: "10/4/2024 - 16/4/2024",
    activities: ["Xây dựng giao diện cho Đăng nhập và Thống kê"],
  },
  {
    time: "17/4/2024 - 17/5/2024",
    activities: ["Lập trình ứng dụng"],
  },
  {
    time: "18/5/2024 - 24/5/2024",
    activities: ["Kiểm thử ứng dụng"],
  },
];

const Timeline = () => {
  return (
    <div className="py-24 w-full relative overflow-hidden">
      <div className="mx-auto w-full max-w-[120rem]">
        <img
          src="/assets/timeline-background.svg"
          alt=""
          className="absolute -top-20 z-0 w-full hidden md:block"
        />
        <div
          className={clsx(
            "absolute z-0 xl:top-[30rem] 2xl:top-[50rem] bg-[#FFDEDF] w-full h-full translate-y-60 hidden md:block"
          )}
        />
        <h1 className="relative z-[1] py-12 mx-auto max-w-[90%] text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-black uppercase">
          Tiến độ đồ án
        </h1>
        <div
          className={clsx(
            "w-full flex flex-col relative z-[1] mt-[3.2rem] pb-[5.12rem]",
            "md:mt-16 md:pb-[6.4rem] md:px-0",
            "lg:mt-20 lg:pb-32"
          )}
        >
          {data.map((item, index) => (
            <div key={index} className="w-full relative z-[1]">
              <div className="flex justify-center">
                <TimelineItem
                  index={index}
                  time={item.time}
                  activities={item.activities}
                />
              </div>
              <div
                className={`w-full flex justify-center ${
                  index === data.length - 1 ? "hidden" : ""
                }`}
              >
                <div className="w-[0.2rem] h-[5.12rem] md:w-1 md:h-[6.4rem] lg:w-[0.3125rem] lg:h-32 bg-[#ed945b]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
