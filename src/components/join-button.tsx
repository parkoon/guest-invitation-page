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
      <div>
        게스트비 10000원 <br />
        <span>카카오뱅크 김근태 3333-22-6595253</span>
        <p>계좌번호를 복사했습니다.</p>
      </div>
    ));
  };
  return (
    <button
      className="bg-red-900 text-white rounded px-10 py-6 active:scale-90 transition font-bold text-[18px] shadow mt-12"
      onClick={handleClick}
    >
      참여하기
    </button>
  );
};

export default JoinButton;
