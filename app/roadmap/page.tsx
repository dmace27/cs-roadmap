import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

const areas = [
  {
    title: "Foundations",
    description: "Programming basics, problem solving, and core CS ideas.",
    href: "/python",
  },
  {
    title: "Software Engineering",
    description: "Building larger apps, teamwork, and code quality.",
  },
  {
    title: "Web Development",
    description: "Frontend, backend, and how the web works.",
  },
  {
    title: "Data Science",
    description: "Working with data, analysis, and visualization.",
  },
  {
    title: "AI / Machine Learning",
    description: "Models that learn from data to make predictions.",
  },
  {
    title: "Cybersecurity",
    description: "Protecting systems, data, and users.",
  },
  {
    title: "Systems and Networks",
    description: "How computers, operating systems, and networks run.",
  },
  {
    title: "Game Development",
    description: "Interactive systems, graphics, and real-time logic.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Roadmap"
        description="A simple map of the CS landscape. You can explore many areas after you build foundations."
      />

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-900">
          Start with Python Foundations
        </h2>
        <p className="mt-2 text-slate-600">
          Python foundations come first. They make every other path easier to
          understand and explore.
        </p>
      </div>

      <Section title="Major areas">
        <CardGrid>
          {areas.map((area) => (
            <Card
              key={area.title}
              title={area.title}
              description={area.description}
              href={area.href}
            />
          ))}
        </CardGrid>
      </Section>
    </div>
  );
}
