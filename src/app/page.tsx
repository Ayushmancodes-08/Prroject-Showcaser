import ProjectCarousel from './_components/project-carousel';
import ContributorDisplay from './_components/contributor-display';
import MentorSpotlight from './_components/mentor-spotlight';
import HeroSection from './_components/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <section id="projects" className="scroll-mt-20">
            <ProjectCarousel />
          </section>
          <section id="contributors" className="scroll-mt-20">
            <ContributorDisplay />
          </section>
          <section id="mentor" className="scroll-mt-20">
            <MentorSpotlight />
          </section>
        </div>
      </div>
    </>
  );
}
