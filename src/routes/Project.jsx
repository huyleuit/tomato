import React from "react";
import { Reveal } from "../common/Reveal";
import Carousel from "../common/Carousel";

const images = [
  "/assets/project/img-1.jpg",
  "/assets/project/img-2.jpg",
  "/assets/project/img-3.jpg",
  "/assets/project/img-4.jpg",
  "/assets/project/img-5.jpg",
  "/assets/project/img-6.jpg",
];

const Project = () => {
  return (
    <div className="py-24 w-full min-h-screen">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 mx-auto max-w-[90%] text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-black uppercase">
          Đồ án
        </h1>
        <div className="mx-auto w-[95%] md:w-[44rem] lg:w-[60rem]">
          <Carousel itemsPerSlide={1}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="mx-auto w-[85vw] md:w-[38rem] lg:w-[50rem]"
              />
            ))}
          </Carousel>
        </div>
        <div className="mx-auto mt-4 basis-[90%] max-w-[90%] md:basis-[80%] md:max-w-[80%] lg:basis-[66.66%] lg:max-w-[66.66%]">
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                1. Giới thiệu
              </h2>
              <div className="text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7]">
                Trong bối cảnh đô thị hóa và sự gia tăng dân số nhanh chóng, nhu
                cầu về nhà ở tại các thành phố lớn như TP.HCM ngày càng trở nên
                cấp thiết. Đặc biệt, nhu cầu thuê nhà trọ của sinh viên, công
                nhân và người lao động nhập cư ngày càng tăng. Tuy nhiên, việc
                quản lý và vận hành các chuỗi nhà trọ vẫn còn nhiều bất cập,
                thiếu tính chuyên nghiệp và hiệu quả. Nhiều chủ nhà trọ vẫn quản
                lý thủ công, dẫn đến việc mất mát thông tin, khó khăn trong việc
                theo dõi và quản lý khách thuê. Để khắc phục những vấn đề này,
                nhóm chúng tôi đề xuất xây dựng một Hệ thống quản lý chuỗi nhà
                trọ hiện đại và hiệu quả.
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                2. Mục tiêu
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Xây dựng một hệ thống phần mềm quản lý chuỗi nhà trọ với giao
                  diện thân thiện và dễ sử dụng.
                </li>
                <li className="list-item">
                  Tăng cường hiệu quả quản lý và giảm thiểu sai sót trong quá
                  trình quản lý nhà trọ.
                </li>
                <li className="list-item">
                  Cung cấp các báo cáo chi tiết giúp chủ nhà trọ nắm bắt được
                  tình hình hoạt động kinh doanh.
                </li>
                <li className="list-item">
                  Đảm bảo an toàn và bảo mật thông tin cho người sử dụng.
                </li>
                <li className="list-item">
                  Giảm thiểu thời gian và công sức cho chủ nhà trọ trong việc
                  quản lý và vận hành nhà trọ.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                3. Tính năng
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Quản lý thông tin khách thuê và hợp đồng thuê.
                </li>
                <li className="list-item">Quản lý căn nhà trọ, phòng trọ.</li>
                <li className="list-item">
                  Theo dõi và quản lý thu chi, thanh toán.
                </li>
                <li className="list-item">
                  Hỗ trợ tìm kiếm và lọc thông tin một cách nhanh chóng.
                </li>
                <li className="list-item">
                  Tích hợp hệ thống bảo mật và sao lưu dữ liệu.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                4. Tính năng mở rộng
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Sử dụng jxmapviewer và nominatim.openstreetmap để decode địa
                  chỉ.
                </li>
                <li className="list-item">
                  Sử dụng javax.mail để thực hiện xác thực người dùng.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                5. Công nghệ sử dụng
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">IDE: Apache Netbeans 21</li>
                <li className="list-item">Ngôn ngữ lập trình: Java</li>
                <li className="list-item">
                  Công cụ lập trình giao diện: JavaSwing
                </li>
                <li className="list-item">Cơ sở dữ liệu: Oracle</li>
                <li className="list-item">
                  Phần mềm quản lý dự án: Git, Github
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                6. Yêu cầu hệ thống
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">Sử dụng jdk21</li>
                <li className="list-item">ojdbc11</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-8 py-4 flex flex-row justify-center gap-4">
              <h2 className="text-[#BE3049] text-[1.75rem] font-black">
                Sản phẩm của chúng mình:
              </h2>
              <a
                href="https://github.com/Bearackle/QuanLyNhaTro"
                className="size-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Project;
