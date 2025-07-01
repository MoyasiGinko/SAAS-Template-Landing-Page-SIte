import Header from "../components/Header";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import ContentSectionOne from "../components/ContentSectionOne";
import ContentSectionTwo from "../components/ContentSectionTwo";
import ContentSectionThree from "../components/ContentSectionThree";
import ContentSectionFour from "../components/ContentSectionFour";
import ContentSectionFive from "../components/ContentSectionFive";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Logos />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <ContentSectionFour />
      <ContentSectionFive />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
