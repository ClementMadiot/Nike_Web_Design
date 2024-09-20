import React, { useState } from "react";
import Button from "../layout/Button";
// data
import { statistics, shoes } from "../../constants";
import { BsArrowRightCircle } from "react-icons/bs";
import { bigShoe1 } from "../../assets/images";
import ShoeCard from "../layout/ShoeCard";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
      <section className="xl:padding-l wide:padding-r padding-b">
        <div
          id="home"
          className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
        >
          <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red">
              Our Summer Collection
            </p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
              <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                The New Arrivals
              </span>
              <br />
              <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">
              Discover stylish Nike arrivals, quality comfort and innovation for
              you active life.
            </p>
            <Button
              label="Show now"
              iconUrl={
                <BsArrowRightCircle className="ml-2 w-5 h-5 bg-white rounded-full text-coral-red border-none" />
              }
            />
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
          <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img
              src={bigShoeImg}
              alt="shoe collection"
              width={610}
              height={502}
              className="object-contain relative z-10"
            />
            <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
              {shoes.map((shoe, index) => (
                <div key={index}>
                  <ShoeCard
                    imgURL={shoe}
                    changeBigShoe={(shoe) => {setBigShoeImg(shoe)}}
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
