// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Data
import { star } from "../../assets/icons";
import { reviews } from "../../constants";

function TestimonialCard() {

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }}
      loop={true}
      className="w-full h-full mySwiper"
    >
      {reviews.map(({ imgURL, customerName, feedback, rating }, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col mb-8">
            <img
              src={imgURL}
              alt={customerName}
              width={120}
              height={120}
              className="rounded-full object-cover shadow-2xl"
            />
            <p className="mt-6 max-w-72 text-center font-montserrat text-slate-gray text-lg leading-7">
              {feedback}
            </p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <img
                src={star}
                alt="rating"
                width={24}
                height={24}
                className="object-contain m-0"
              />
              <p className="text-xl font-montserrat text-slate-gray">
                {rating}
              </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
              {customerName}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )}

export default TestimonialCard;