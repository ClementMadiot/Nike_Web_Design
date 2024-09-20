import {
  Nav,
  Hero,
  Products,
  Quality,
  Services,
  Offer,
  Testimonials,
  Subscribe,
  Footer,
} from "./components";
import "./index.css";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Products />
      <Quality />
      <Services />
      <Offer />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}

