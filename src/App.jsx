import { useEffect } from "react";
import { clinic } from "./config/clinic";
import DemoNotice from "./components/DemoNotice";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = clinic.name;
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <DemoNotice />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
