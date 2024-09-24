import React from "react";
import Title from "../layout/Title";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="bg-violet-100 py-24 px-16 sm:px-8 lg:px-16">
      <div className="max-container text-center">
        <Title
          titleStart="What our"
          titleOrange="Customers"
          titleEnd="Say?"
          classTitle="text-4xl lg:max-w-inherit "
          paragraph="Hear genuine stories from our satisfied customers about their exceptional experience with us."
          classParagraph={"mt-4 max-w-lg mx-auto"}
        />
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
