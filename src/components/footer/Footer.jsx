import { socialMedia, footerLinks } from "../../constants";
import { footerLogo } from "../../assets/images";
function Footer() {
  return (
    <section className="bg-black padding-x padding-t pb-8">
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <article className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} width={150} height={46} alt="nike logo" />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewarded
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-12
              h-12 bg-white rounded-full cursor-pointer hover:scale-105 duration-150"
                >
                  <img src={item.src} alt={item.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </article>
          <article className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((item, index) => (
              <div key={index} className="text-white">
                <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map(({ name, link }, index) => (
                    <li
                      key={index}
                      className="font-montserrat text-base text-white-400 mt-3 leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a href={link}>{name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </div>

        <article className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
          <p>© Copyright. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </article>
      </footer>
    </section>
  );
}

export default Footer;
