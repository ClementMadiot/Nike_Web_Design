import React from 'react'
import {reviews} from '../../constants'
import Title from '../layout/Title'; // Adjust the import path as necessary
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <section className="bg-violet-100 padding">
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
          {reviews.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials