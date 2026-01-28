import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function GameDevelopmentPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Game Development"
        description="Designing interactive experiences and real-time systems."
      />

      <Section title="What this field involves">
        <p>
          Game development blends programming, art, and design to build
          interactive worlds. In practice, this includes handling graphics,
          physics, user input, and performance so games feel responsive.
          <br></br>
          <br></br>
          In the real world, game developers build systems that run in real
          time. That means every frame matters. They think about animation,
          state, timing, and how to make things feel smooth and fun. A big part
          of the job is turning creative ideas into clear, testable systems.
          <br></br>
          <br></br>
          Game development also teaches strong engineering habits. You learn to
          manage complexity, performance, and user experience all at once. Even
          if you do not work in games long term, it builds useful skills for
          interactive software.
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://dev.to/cyberlord/game-development-basics-essential-concepts-and-tools-for-beginners-1c47" target="_blank">Game Dev Basics</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@GMTK" target="_blank">Game Maker's Toolkit on YouTube</a>
          </li>
          <li>
            <a href="https://youtu.be/eANjGomWZp4?si=Pm5dyUHG-Bequ-Ok" target="_blank">Game Development for Dummies</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
