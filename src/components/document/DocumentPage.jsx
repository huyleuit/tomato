import React from "react";
import First from "../../animation/first.json";
import Second from "../../animation/second.json";
import Third from "../../animation/third.json";
import Lottie from "lottie-react";

const list = [
  {
    title: "Lần 1",
    illustration: First,
    url: "/document/first-meeting",
  },
  {
    title: "Lần 2",
    illustration: Second,
    url: "/document/second-meeting",
  },
  {
    title: "Lần 3",
    illustration: Third,
    url: "/document/third-meeting",
  },
];

const DocumentPage = () => {
  console.log();
  return (
    <div className="relative w-full">
      <h1 className="py-12 mx-auto max-w-[90%] text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-extrabold uppercase">
        Biên bản họp nhóm
      </h1>
      <div className="px-[10%] grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {list.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="relative flex flex-col items-center"
          >
            <h2 className="absolute top-[5%] md:top-8% text-[#333] text-[2rem] font-[Nunito] font-bold leading-[1.71]">
              {item.title}
            </h2>
            <Lottie animationData={item.illustration} loop />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocumentPage;
