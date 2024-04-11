import React from "react";
import { Reveal } from "../common/Reveal";

const Contract = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 mx-auto max-w-[90%] text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-black uppercase">
          Hợp đồng thành lập nhóm
        </h1>
        <iframe
          src="https://drive.google.com/file/d/17URQxVbSm7zIOQUuqvRAWciSiDXSioTp/preview"
          allow="autoplay"
          loading="eager"
          className="mx-auto mb-4 w-[90%] h-[55vh] md:w-[40rem] md:h-[36.25rem] border-solid border-[#333] border-[0.25rem]"
        ></iframe>
        <div className="mx-auto basis-[90%] max-w-[90%] md:basis-[80%] md:max-w-[80%] lg:basis-[66.66%] lg:max-w-[66.66%]">
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                1. Nguyên tắc làm việc nhóm
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Tôn trọng ý kiến của mỗi thành viên trong nhóm.
                </li>
                <li className="list-item">
                  Luôn lắng nghe và đưa ra đánh giá xây dựng, tích cực.
                </li>
                <li className="list-item">
                  Chia sẻ thông tin, kiến thức và kinh nghiệm của mình với nhóm.
                </li>
                <li className="list-item">
                  Hoàn thành nhiệm vụ được giao đúng thời hạn và chất lượng.
                </li>
                <li className="list-item">
                  Hỗ trợ, giúp đỡ nhau khi cần thiết.
                </li>
                <li className="list-item">
                  Luôn giữ mối liên lạc và tiến độ công việc.
                </li>
                <li className="list-item">
                  Tạo không gian làm việc thoải mái.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                2. Kế hoạch giao tiếp nhóm
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Tuần suất gặp mặt: mỗi tuần 2 lần.
                </li>
                <li className="list-item">
                  Thời gian: Thứ 5 và thứ 7 (có thể linh động).
                </li>
                <li className="list-item">Địa điểm: Trường UIT (linh động).</li>
                <li className="list-item">
                  Thông báo thông qua: Group Zalo của nhóm.
                </li>
                <li className="list-item">
                  Sử dụng Zalo để trao đổi thông tin nhanh chóng.
                </li>
                <li className="list-item">
                  Tối thiểu nhóm trưởng sẽ thông báo trước 24h.
                </li>
                <li className="list-item">
                  Sử dụng các công cụ Google Meet để họp trực tuyến.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                3. Kế hoạch họp nhóm
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Họp định kỳ để đánh giá tiến độ và phân chia công việc.
                </li>
                <li className="list-item">
                  Chia sẻ thông tin và tiến độ công việc của mỗi thành viên.
                </li>
                <li className="list-item">
                  Đặt mục tiêu và chủ đề cho từng cuộc họp.
                </li>
                <li className="list-item">
                  Thảo luận những vấn đề gặp phải và đưa ra giải pháp cùng nhau.
                </li>
                <li className="list-item">
                  Quyết định và thống nhất các quyết định quan trọng trong quá
                  trình làm việc.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                4. Quy tắc thưởng và phạt
              </h2>
              <p className="text-[#333] text-[1.5rem] font-bold">
                <strong>{"a) Quy tắc thưởng"}</strong>
              </p>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Thành viên hoàn thành công việc trước thời hạn sẽ được thưởng.
                </li>
                <li className="list-item">
                  Thành viên đóng góp ý tưởng hay sẽ được thưởng.
                </li>
                <li className="list-item">
                  Duy trì thành tích tốt xuyên suốt quá trình làm việc nhóm.
                </li>
                <li className="list-item">
                  Nếu thành viên nhiều lần liên tiếp đóng góp cho nhóm sẽ được
                  các thành viên còn lại dẫn đi ăn uống (trà sữa + bánh tráng
                  trộn).
                </li>
              </ul>
              <p className="mt-1 text-[#333] text-[1.5rem] font-bold">
                <strong>{"b) Quy tắc phạt"}</strong>
              </p>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Nếu đến trễ giờ quá 10 phút thì sẽ bị cảnh cáo lần 1, tái phạm
                  phải nộp phạt 10.000đ (cứ tăng 10 phút tăng 2.000đ). Nếu không
                  đi họp thì bị phạt 30.000đ và bị trừ 2 điểm.
                </li>
                <li className="list-item">
                  Nếu giao công việc mà không chịu thực hiện thì sẽ bị chia 0
                  điểm và bị phê bình trước nhóm.
                </li>
                <li className="list-item">
                  Nếu giao công việc mà hoàn thành không đúng hạn hoặc làm không
                  nghiêm túc thì sẽ bị phạt trừ điểm tùy theo mức độ. Nếu vi
                  phạm nhiều lần mà không có lí do chính đáng sẽ xem xét cho 0
                  điểm.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                5. Tiêu chí đánh giá thành viên cuối đồ án và cuối môn học
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Đánh giá theo 3 mức độ: chưa hoàn thành, hoàn thành sơ bộ và
                  hoàn thành.
                </li>
                <li className="list-item">
                  Đánh giá dựa trên đóng góp tích cực cho nhóm và sự hợp tác
                  trong quá trình làm việc.
                </li>
                <li className="list-item">
                  Đánh giá dựa trên độ chính xác và tính đầy đủ của thông tin và
                  tài liệu được chia sẻ trong nhóm.
                </li>
                <li className="list-item">
                  Đánh giá dựa trên khả năng tự quản lý thời gian và công việc.
                </li>
                <li className="list-item">
                  Đánh giá dựa trên khả năng thích nghi với tình huống và giải
                  quyết vấn đề.
                </li>
                <li className="list-item">
                  Các thành viên trong nhóm sẽ đánh giá chéo cho nhau.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                6. Thời gian hoạt động của nhóm
              </h2>
              <div className="ml-6 text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                Nhóm cam kết hoạt động trong thời gian từ 19/02/2024 đến
                11/05/2024. Nhóm có thể tiến hành thay đổi thời gian hoạt động
                nếu cần thiết và được thống nhất với tất cả các thành viên trong
                nhóm.
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#BE3049] text-[2rem] font-black">
                7. Phương thức giải quyết tranh chấp
              </h2>
              <ul className="ml-6 list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li className="list-item">
                  Trong trường hợp có tranh chấp xảy ra, các thành viên trong
                  nhóm sẽ đưa ra ý kiến và thỏa thuận giải quyết trong thời gian
                  sớm nhất.
                </li>
                <li className="list-item">
                  Thời gian sớm nhất sẽ được dành cho việc giải quyết tranh
                  chấp, giúp duy trì môi trường làm việc tích cực và hiệu quả.
                </li>
                <li className="list-item">
                  Trong trường hợp không thể thỏa thuận được, nhóm sẽ tìm cách
                  giải quyết bên ngoài như thông qua giảng viên để giải quyết
                  tranh chấp một cách công bằng và minh bạch.
                </li>
                <li className="list-item">
                  Mọi thành viên trong nhóm sẽ tuân thủ và chấp nhận quyết định
                  sau khi tranh chấp được giải quyết, nhằm duy trì sự đồng thuận
                  và sự nhất quán trong nhóm.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contract;
