import JoinButton from "@/components/join-button";
import KakaoMapButton from "@/components/map/kakao-map-button";
import NaverMapButton from "@/components/map/naver-map-button";
import TMapButton from "@/components/map/t-map-button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-red-50 h-full relative">
      <Image fill objectFit="cover" alt="bg" src="/images/bg.jpg" />
      <div className="absolute  w-full h-full flex justify-center items-center flex-col px-6">
        <img src="/images/title.png" alt="title" />

        <h1 className="text-slate-300 text-[32px] font-bold mt-4 text-center break-keep">
          게스트로 오신 것을 환영합니다.
        </h1>

        <JoinButton />

        <div className="flex gap-2 mt-6">
          <NaverMapButton />
          <KakaoMapButton />
          <TMapButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
