import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Product />
      <Benefits />
      <HowItWorks />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;
