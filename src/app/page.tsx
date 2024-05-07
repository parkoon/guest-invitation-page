import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <Image fill objectFit="cover" alt="bg" src="/images/bg.jpg" />
    </div>
  );
};

export default Home;
