import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import WhyChooseUs from "@/components/solutions/WhyChooseUs";
import Process from "@/components/process/Process";
import TechStack from "@/components/tech/TechStack";
import Contact from "@/components/contact/Contact";
import Trust from "@/components/ui/Trust";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/testimonials/Testimonials";

/**
 * Root page — assembles all landing page sections in order.
 * All section components are independently code-split as React Server Components
 * where possible, with client boundaries declared within each component.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Box component="main">
        <Hero />
        {/* <Trust /> */}
        {/* <About /> */}
        <Services />
        <WhyChooseUs />
        {/* <Portfolio /> */}
        <Process />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
