import clsx from "clsx";
import React from "react";
import { Reveal } from "../common/Reveal";

const members = [
  {
    studentId: "22520493",
    name: "Nguyễn Đình Huân",
    role: "Phân tích viên, Coder, Hỗ trợ UI/UX, Hỗ trợ quản lí dự án.",
    strengths: "Năng động, sáng tạo, sẵn lòng học hỏi, nghĩ ra sáng kiến mới.",
    weaknesses:
      "Do ham học hỏi và mong muốn thử nghiệm cái mới, có thể dễ bị phân tâm khi quá nhiều ý tưởng hoặc dự án cùng một lúc.",
    avatar: "/assets/huan.jpg",
  },
  {
    studentId: "22520508",
    name: "Lê Quốc Hưng",
    role: "Coder, Report Builder, Project Manager",
    strengths:
      "Sáng tạo, đam mê học hỏi, đam mê lập trình, kỹ năng quản lý nhóm, kỹ năng văn vẻ.",
    weaknesses: "Hơi lười, hong thích làm những thứ vô nghĩa.",
    avatar: "/assets/quoc-hung.jpg",
  },
  {
    studentId: "22520526",
    name: "Trần Duy Hưng",
    role: "Coder, Supporter, Tìm tài liệu, Viết hướng dẫn sử dụng (Document Researcher)",
    strengths:
      "Sẵn sàng hỗ trợ nhóm ở nhiều khía cạnh khác nhau, từ công việc kỹ thuật đến quản lý nhóm.",
    weaknesses:
      "Không luôn tổ chức tốt, có thể gặp khó khăn trong việc quản lý thời gian và ưu tiên công việc.",
    avatar: "/assets/duy-hung.jpg",
  },
  {
    studentId: "22520549",
    name: "Lê Quốc Huy",
    role: "Coder, Project Business Case",
    strengths:
      "Tích cực tìm hiểu và nắm bắt kiến thức mới để phát triển bản thân và đóng góp cho nhóm.",
    weaknesses:
      "Mặc dù linh hoạt, nhưng có thể gặp khó khăn khi phải thích nghi với một môi trường hoặc công việc mới quá nhanh.",
    avatar: "/assets/huy.png",
  },
  {
    studentId: "21522083",
    name: "Huỳnh Phú Hoài",
    role: "Coder, tester",
    strengths:
      "Có khả năng thích nghi nhanh chóng và linh hoạt trong các tình huống khác nhau.",
    weaknesses:
      "Kĩ năng làm slide, trình bày nội dung và thuyết trình còn yếu, đang dần cải thiện",
    avatar: "/assets/hoai.png",
  },
];

const AboutUs = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-extrabold uppercase">
          Giới thiệu thành viên nhóm
        </h1>
        <div className="flex flex-col gap-y-16 md:gap-y-8">
          {members.map((member, index) => (
            <MemberCard key={index} index={index} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const MemberCard = ({ index, data }) => {
  return (
    <Reveal>
      <div
        className={clsx(
          "px-[8%] w-full flex items-center justify-center gap-x-8 xl:gap-x-16 gap-y-4",
          index % 2 === 0
            ? "flex-col md:flex-row"
            : "flex-col md:flex-row-reverse"
        )}
      >
        <div className="xl:p-12 basis-[90%] max-w-[90%] ssm:basis-[66.67%] ssm:max-w-[66.67%] md:basis-[30%] md:max-w-[30%] min-h-[15rem] flex items-center">
          <img
            src={data.avatar}
            alt="avatar"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="lg:w-max lg:max-w-[50%] text-[#333]">
          <h3 className="text-center text-[2.25rem] font-bold leading-[1.4]">
            {data.name}
          </h3>
          <div className="mt-2 flex flex-col gap-1 text-[1.25rem] font-medium">
            <p>
              <strong>MSSV:</strong> {data.studentId}
            </p>
            <p className="tracking-[-0.025rem]">
              <strong>Vai trò:</strong> {data.role}
            </p>
            <p>
              <strong>Điểm mạnh:</strong> {data.strengths}
            </p>
            <p>
              <strong>Điểm yếu:</strong> {data.weaknesses}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
