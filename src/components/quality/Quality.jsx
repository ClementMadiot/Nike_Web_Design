import React from "react";
import Button from "../layout/Button"; // Adjust the import path as necessary
import Title from "../layout/Title"; // Adjust the import path as necessary

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
          classTitle={"text-4xl lg:max-w-lg"}
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
            <Button label="View details" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
