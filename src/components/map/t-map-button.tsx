"use client";

import mobileOnlyTrigger from "@/helpers/mobile-only-trigger";
import useCopyToClipboard from "@/hooks/use-copy-to-clipbaord";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { address, destination, lat, lng } from "./constants";

const TMapButton = () => {
  const [_, copyToClipboard] = useCopyToClipboard();

  const handleClick = () => {
    mobileOnlyTrigger((isMobile) => {
      if (isMobile) {
        // window.location.href = `tmap://route?rGoName=${destination}&rGoX=${lat}&rGoY=${lng}`;

        window.location.href = `tmap://route?goalname=${destination}&goalx=${lat}&goaly=${lng}`;
      } else {
        copyToClipboard("3333226595253");
        toast((t) => (
          <div>
            <span>{address}</span>
            <p>주소를 복사했습니다.</p>
          </div>
        ));
      }
    });
  };
  return (
    <button onClick={handleClick} className="text-white">
      티맵
    </button>
  );
};

export default TMapButton;
