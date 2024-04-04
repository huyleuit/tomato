import clsx from "clsx";
import React from "react";
import { Reveal } from "../components/Reveal";

const members = [
  {
    studentId: "21522083",
    name: "Huỳnh Phú Hoài",
    role: "[Role]",
    strengths: "[Strengths]",
    weaknesses: "[Weaknesses]",
    avatar: "",
  },
  {
    studentId: "22520493",
    name: "Nguyễn Đình Huân",
    role: "[Role]",
    strengths: "[Strengths]",
    weaknesses: "[Weaknesses]",
    avatar: "",
  },
  {
    studentId: "22520508",
    name: "Lê Quốc Hưng",
    role: "[Role]",
    strengths: "[Strengths]",
    weaknesses: "[Weaknesses]",
    avatar: "",
  },
  {
    studentId: "22520526",
    name: "Trần Duy Hưng",
    role: "[Role]",
    strengths: "[Strengths]",
    weaknesses: "[Weaknesses]",
    avatar: "",
  },
  {
    studentId: "22520549",
    name: "Lê Quốc Huy",
    role: "[Role]",
    strengths: "[Strengths]",
    weaknesses: "[Weaknesses]",
    avatar: "/assets/huy.png",
  },
];

const AboutUs = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 text-center text-[#333] text-[2.25rem] font-extrabold uppercase">
          Giới thiệu thành viên nhóm
        </h1>
        <div className="flex flex-col gap-4">
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
          "w-full flex items-center justify-center gap-16",
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div className="p-12 basis-[30%] max-w-[30%] min-h-[15rem]">
          <img
            src={data.avatar}
            alt="avatar"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="w-max text-[#333]">
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
