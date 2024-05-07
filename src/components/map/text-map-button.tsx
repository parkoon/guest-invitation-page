"use client";

import useCopyToClipboard from "@/hooks/use-copy-to-clipbaord";
import React from "react";
import toast from "react-hot-toast";
import { address } from "./constants";

const TextMapButton = () => {
  const [_, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(address);
    toast((t) => (
      <div onClick={() => toast.dismiss(t.id)}>
        <p>아래 주소를 복사했습니다.</p>
        <span className="font-semibold underline">{address}</span>
      </div>
    ));
  };

  return (
    <button className="text-gray-300 underline" onClick={handleClick}>
      주소 복사하기
    </button>
  );
};

export default TextMapButton;
