import React, { useState } from "react";
import Button from "../layout/Button";
// data
import { statistics, shoes } from "../../constants";
import { bigShoe1 } from "../../assets/images";
import ShoeCard from "./ShoeCard";
import Title from "../layout/Title"; // Add this line to import Title component

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="xl:padding-l wide:padding-r padding-b">
      <div
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <Title
            titleSpan={"The New Arrivals"}
            titleOrange={"Nike"}
            classTitleOrange={"inline-block mt-3"}
            titleEnd={"Shoes"}
            classTitle={
              "md:text-8xl text-4xl mt-10"
            }
            paragraph={
              "Discover stylish Nike arrivals, quality comfort and innovation for you active life."
            }
            classParagraph={"text-lg leading-8 mt-6 mb-14"}
          />
          <Button label="Show now" iconUrl={true} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map(({ value, label }) => (
              <div key={label} className="">
                <p className="text-4xl font-bold font-palanquin">{value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* image header  */}
        <div className="relative flex-1 flex justify-center items-center  max-xl:py-20 sm:max-xl:pb-36 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={310}
            height={302}
            className="object-contain relative z-10 w-[310px] sm:w-[410px]"
          />
          <div className="flex gap-4 sm:gap-6 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoe={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
