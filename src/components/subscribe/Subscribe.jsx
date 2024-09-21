import React from "react";
import Title from "../layout/Title";
import Button from "../layout/Button";

function Subscribe() {
  return (
    <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <div className="max-container flex flex-col justify-between items-center gap-5">
        <Title
          titleStart="Sign Up from"
          titleOrange="Update"
          titleEnd="& Newsletters"
          classTitle="text-4xl lg:max-w-inherit leading-[68px]"
        />
        <div className="lg:max-w-[75%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@nike.com" className="input" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label={"Sign Up"} fullWidth/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
