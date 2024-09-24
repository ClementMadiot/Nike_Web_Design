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
          classTitle="text-3xl sm:text-4xl lg:max-w-inherit leading-snug text-center sm:text-left sm:leading-normal"
        />
        <div className="lg:max-w-[75%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@nike.com" className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none  sm:border-none border max-sm:border-slate-gray max-sm:rounded-full focus:border-coral-red" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label={"Sign Up"} fullWidth={'w-full sm:w-auto'}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
