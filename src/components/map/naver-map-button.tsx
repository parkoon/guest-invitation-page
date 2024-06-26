"use client";

import mobileOnlyTrigger from "@/helpers/mobile-only-trigger";
import useCopyToClipboard from "@/hooks/use-copy-to-clipbaord";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { address, destination, lat, lng } from "./constants";

const NaverMapButton = () => {
  const [_, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    mobileOnlyTrigger((isMobile) => {
      if (isMobile) {
        window.location.href = `nmap://place?lat=${lat}&lng=${lng}&name=${destination}&appname=com.example.myapp:`;

        return;
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
        src="/images/map_naver.png"
        width={40}
        height={40}
        alt="map_naver"
      />
    </button>
  );
};

export default NaverMapButton;
