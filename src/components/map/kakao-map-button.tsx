"use client";

import mobileOnlyTrigger from "@/helpers/mobile-only-trigger";
import useCopyToClipboard from "@/hooks/use-copy-to-clipbaord";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { address, destination, lat, lng } from "./constants";

const KakaoMapButton = () => {
  const [_, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    mobileOnlyTrigger((isMobile) => {
      if (isMobile) {
        window.location.href = `https://map.kakao.com/link/to/${destination} ,${lat},${lng}`;
      } else {
        copyToClipboard(address);
        toast((t) => (
          <div onClick={() => toast.dismiss(t.id)}>
            <p>아래 주소를 복사했습니다.</p>
            <span className="font-semibold underline">{address}</span>
          </div>
        ));
      }
    });
  };
  return (
    <button onClick={handleClick}>
      <Image
        src="/images/map_kakao.png"
        width={40}
        height={40}
        alt="map_kakao"
      />
    </button>
  );
};

export default KakaoMapButton;
