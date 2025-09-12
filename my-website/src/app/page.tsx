import SquiggleRight from "./components/squiggleright";
import Starfield from "./components/starfiled";
import Typewriter from "./components/typewrite";
import AboutSection from "./components/aboutsection";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Starfield />
      </div>
      <section id="hero" className="relative min-h-[100svh] flex items-center">
          <SquiggleRight zIndex={20} />
        <div className="relative z-20 max-w-[940px] px-[6vw]">
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
                "making things…",
                "building AI tools…",
                "designing React/Next.js frontends…",
                "turning data into stories…",
                "experimenting with LLMs…",
                "mapping the world…",
                "leading student projects…",
                "cooking fried rice…",
              ]}
              typingSpeed={45}
              deletingSpeed={28}
              pauseTime={1000}
            />
          </p>
        </div>
      </section>
      <section id="about" className="relative z-20 pt-[18vh]">
        <AboutSection />
      </section>
    </>
  );
}
