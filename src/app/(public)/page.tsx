import CtaSection from "@/components/home/CtaSection";
import Differentials from "@/components/home/Differentials";
import Hero from "@/components/home/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";
import "@/components/home/home.css";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Differentials />
      <ProjectsPreview />
      <Testimonials />
      <CtaSection />
    </main>
  );
}