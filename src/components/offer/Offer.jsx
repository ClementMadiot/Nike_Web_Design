import { offer } from "../../assets/images";
import Title from "../layout/Title";
import Button from "../layout/Button";

function Offer() {
  return (
    <section className="padding">
      <div className="max-container flex items-center flex-wrap gap-10 max-xl:flex-col-reverse max-container">
        <article className="flex-1 ">
          <img
            src={offer}
            alt={offer}
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </article>
        <article>
          <Title
            titleOrange={"Special"}
            titleEnd={"Offer"}
            paragraph={
              "Embark on a journey that redefines your experience with unbeatable deals. From premier selections ro incredible savings, we offer unparalleled value that sets us apart"
            }
            classParagraph={"lg:max-w-lg mt-4"}
            paragraph2={
              "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional"
            }
            classParagraph2={"lg:max-w-lg mt-6"}
          />
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View details" fullWidth={"w-full sm:w-auto"} />
            <Button
              label="Learn more"
              backgroundColor={"bg-white border-slate-gray text-slate-gray"}
              fullWidth={"w-full sm:w-auto"}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Offer;
