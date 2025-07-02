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
      <section id="home">
        <Hero />
        <Logos />
      </section>
      <section id="features">
        <ContentSectionOne />
        <ContentSections />
        <ComplianceSection />
      </section>
      <section id="solutions">
        <Testimonials />
      </section>
      <section id="resources">
        <FAQ />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer />
    </>
  );
}
