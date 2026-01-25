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
        </p>
      </Section>
    </div>
  );
}
