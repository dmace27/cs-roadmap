import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

const explorationAreas = [
  {
    title: "Web Development",
    description: "Build websites and simple web apps.",
  },
  {
    title: "Data and Analysis",
    description: "Explore data, charts, and basic insights.",
  },
  {
    title: "Automation",
    description: "Use scripts to save time on small tasks.",
  },
  {
    title: "Game Development",
    description: "Make small games and interactive projects.",
  },
  {
    title: "Cybersecurity",
    description: "Learn how to protect systems and data.",
  },
  {
    title: "AI and Machine Learning",
    description: "Understand models that learn from data.",
  },
];

export default function NextStepsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Next Steps"
        description="Once you finish Python foundations, you can explore any direction. You are allowed to change your mind."
      />

      <Section title="Permission to explore">
        <p>
          You do not need a perfect plan. Try one area, build something small,
          and notice what feels interesting. Switching interests is normal.
        </p>
      </Section>

      <Section title="Possible directions">
        <CardGrid>
          {explorationAreas.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="Keep it simple">
        <p>
          Pick one small idea, build it, and reflect on what you enjoyed. That
          is enough to decide what to try next.
        </p>
      </Section>
    </div>
  );
}
