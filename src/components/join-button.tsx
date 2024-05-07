"use client";

import useCopyToClipboard from "@/hooks/use-copy-to-clipbaord";
import React from "react";
import toast from "react-hot-toast";
import { message } from "./message";

const JoinButton = () => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const handleClick = () => {
    copyToClipboard("3333226595253");
    toast((t) => (
      <div onClick={() => toast.dismiss(t.id)}>
        <p className="mb-2">계좌번호를 복사했습니다.</p>
        <span>
          <div className="bg-[#FEE500] text-[#191919] text-[12px] inline-block p-1 rounded">
            카카오뱅크
          </div>
          김근태 3333-22-6595253
        </span>
      </div>
    ));
  };
  return (
    <button
      className="bg-red-900 text-white rounded px-10 py-4 active:scale-90 transition shadow mt-12  tracking-widest"
      onClick={handleClick}
    >
      <span className="font-semibold text-[18px]">참여하기</span>
      <p className="text-[14px] text-gray-200">게스트비 10,000원</p>
    </button>
  );
};

export default JoinButton;
