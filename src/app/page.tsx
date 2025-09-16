import SquiggleRight from "./components/squiggleright";
import Starfield from "./components/starfiled";
import Typewriter from "./components/typewrite";
import AboutSection from "./components/aboutsection";
import ProjectsSection from "./components/projects";
import ExperiencesTimeline, {ExperienceItem} from "./components/experiencetimeline";
import HoverMegaMenu from "./components/hovermenu";
import Section from "./components/section";

const items: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Engineering Intern",
    company: "LG NOVA",
    location: "Santa Clara, CA",
    start: "May 2025",
    end: "Aug 2025",
    description: "I built and tested multiple API endpoints, standardized error handling, and improved code coverage through extensive test case development. I also debugged issues with authentication and data flows, documented system behavior for external teams, and contributed to automating data integrations and exports to support project tracking and analysis.",
  },
  {
    id: "2",
    role: "Software Engineering Intern",
    company: "LG NOVA",
    location: "Santa Clara, CA",
    start: "May 2025",
    end: "Aug 2025",
    description: "Built Atlas…",
    href: "https://example.com",
  },
  {
    id: "3",
    role: "Software Engineering Intern",
    company: "LG NOVA",
    location: "Santa Clara, CA",
    start: "May 2025",
    end: "Aug 2025",
    description: "Built Atlas…",
    href: "https://example.com",
  },
];

export default function Home() {
  return (
    <>
    <HoverMegaMenu />
      <div className="fixed inset-0 z-0">
        <Starfield />
      </div>

      <Section
        id="hero"
        className="relative min-h-[100svh] flex items-center overflow-hidden"
      >
        <div
          className="pointer-events-none absolute z-10 right-[-50vw] top-[-105vh] w-[76vw] h-[135svh]"
          style={{
            transform: "scale(1.7)",
            transformOrigin: "top right",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <SquiggleRight zIndex={20} />
        </div>
        <div className="relative z-20 px-[15vw]">
          <h1
            className="font-mondwest"
            style={{
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 1.05,
              color: "#AAB3FC",
              marginBottom: "2rem",
            }}
          >
            hello! i&apos;m anupriya
          </h1>

          <p
            className="font-handjet"
            style={{
              fontSize: "clamp(22px, 3vw, 40px)",
              lineHeight: 1.2,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            i like{" "}
            <Typewriter
              className="font-handjet"
              words={[
                "making things...",
                "building AI tools...",
                "designing frontend interfaces...",
                "turning data into stories...",
                "experimenting with LLMs...",
                "traveling the world...",
                "leading student projects...",
                "cooking different cuisines...",
                "food and eating in general...",
                "watching tv shows...",
                "learning new things...",
                "making beds...",
                "organizing things (from time to time)...",
              ]}
              typingSpeed={45}
              deletingSpeed={28}
              pauseTime={1000}
            />
          </p>
        </div>
      </Section>

      <Section id="about">
        <AboutSection />
      </Section>

      <Section id="experience">
        <div className="mx-auto max-w-screen-2xl px-6">
          <ExperiencesTimeline items={items} />
        </div>
      </Section>

      <Section id="projects">
        <ProjectsSection />
      </Section>
    </>
  );
}
