import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Trust from "./components/sections/Trust";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Solutions from "./components/sections/Solutions";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import TechStack from "./components/sections/TechStack";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Solutions />
      <Portfolio />
      <Process />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
