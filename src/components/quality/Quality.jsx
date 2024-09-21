import React from "react";
import Button from "../layout/Button"; // Adjust the import path as necessary
import Title from "../layout/Title"; // Adjust the import path as necessary
import { shoe8 } from "../../assets/images";

function Quality() {
  return (
    <section className="padding">
      <div
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full 
      max-container"
      >
        <div className="flex flex-1 flex-col">
          <Title
          titleStart={"We Provide You"}
          titleOrange={"Super"}
          titleOrange2={"Quality"}
          titleEnd={"Shoes"}
          paragraph={
            "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance."
          }
          classParagraph={"lg:max-w-lg mt-4"}
          paragraph2={"Our dedication to detail and excellence ensures your satisfaction"}
          classParagraph2={"lg:max-w-lg mt-6"}
          />
          <div className="mt-11">
            <Button label="View details" iconUrl={true} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} />
        </div>
      </div>
    </section>
  );
}

export default Quality;
