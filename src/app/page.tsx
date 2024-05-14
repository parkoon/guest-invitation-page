import JoinButton from "@/components/join-button";
import KakaoMapButton from "@/components/map/kakao-map-button";
import NaverMapButton from "@/components/map/naver-map-button";
import TMapButton from "@/components/map/t-map-button";
import TextMapButton from "@/components/map/text-map-button";
import { getNextMonday } from "@/helpers/get-next-monday";
import Image from "next/image";
import React from "react";
export const dynamic = "force-dynamic";

const Home = () => {
  return (
    <div className="bg-red-50 h-full relative">
      <Image fill objectFit="cover" alt="bg" src="/images/bg.jpg" />
      <div className="absolute  w-full h-full flex justify-center items-center flex-col px-6">
        <h5 className="text-[24px] text-white font-bold mb-4 ">
          {getNextMonday()}
        </h5>

        <div className="px-6">
          <img src="/images/title.png" alt="title" />
        </div>

        <h1 className="text-white text-[28px] font-bold mt-6 text-center break-keep">
          클럽에 오신 것을 환영합니다.
        </h1>

        <JoinButton />

        <div className="flex gap-2 mt-6">
          <NaverMapButton />
          <KakaoMapButton />
          {/* <TMapButton /> */}
        </div>

        <div className="mt-2">
          <TextMapButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
