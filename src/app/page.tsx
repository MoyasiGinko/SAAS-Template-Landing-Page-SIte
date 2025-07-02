import Header from "../components/Header";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import ContentSectionOne from "../components/ContentSectionOne";
import ContentSections from "../components/ContentSections";
import ComplianceSection from "../components/ComplianceSection";
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
      <ContentSections />
      <ComplianceSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
