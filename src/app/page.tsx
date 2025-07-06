import TerminalText from "@/components/TerminalText";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-8">
        <TerminalText className="text-xl" text="Hello, World!" />
        <h2 className="text-2xl font-bold text-accent mb-4">about me</h2>
        <p className="text-lg">
          I&#39;m a passionate software engineer and lifelong learner who loves solving difficult problems and creating new things.
          When I&#39;m not working, I&#39;m usually producing music, making/playing video games, coding personal projects, or studying Japanese.
        </p>
        <p className="text-lg">
          I value writing clean, maintainable, and well-tested code.
          I&#39;m particularly interested in architecture and design patterns, and I enjoy learning new programming languages and paradigms that challenge the way I think.
          I take pride in building software that&#39;s not only functional, but thoughtfully designed.
        </p>
        <p className="text-lg">
          I&#39;m currently looking for new opportunities where I can contribute meaningful, impactful code as part of a collaborative team.
          I&#39;m an effective communicator and team player, always eager to grow my skills and take on new challenges.
        </p>
      </section>
    </div>
  )
}
