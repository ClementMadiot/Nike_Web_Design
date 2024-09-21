import { services } from '../../constants'
import ServicesCard from './ServicesCard'


function Services() {
  return (
    <section className="padding-x py-10">
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Services