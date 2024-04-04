import React from "react";

const Contact = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="pt-12 pb-6 text-center text-[#333] text-[2.25rem] font-black uppercase">
          Liên hệ
        </h1>
        <p className="text-center text-[#333] text-[1.25rem] font-black">
          Mọi thắc mắc về Tomato hay bất kỳ hoạt động, sản phẩm nào của nhóm,
          vui lòng liên hệ thông tin sau
        </p>
        <div className="mx-auto my-6 w-[25rem] h-[0.2rem] bg-[#333]" />
        <div className="mx-auto pt-6 basis-[30%] max-w-[30%] text-center">
          <img src="/assets/tomato.png" alt="" className="w-full p-4" />
          <div className="text-[2rem] text-[#333] font-black">[Name]</div>
          <div className="mt-2 mb-3 text-[1.5rem] text-[#333] font-black">
            Thư ký
          </div>
          <div className="text-[#333] text-[1.25rem] font-bold">
            Email: [email]
          </div>
          <div className="text-[#333] text-[1.25rem] font-bold">
            Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM
          </div>
        </div>
        <p className="mt-20 text-center text-[#333] text-[2rem] font-black leading-[1.7]">
          Xin chân thành cảm ơn!
        </p>
      </div>
    </div>
  );
};

export default Contact;
