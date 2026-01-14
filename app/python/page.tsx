import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

const pythonSteps = [
  {
    title: "Setup",
    description: "Get a Python environment running quickly.",
    href: "/python/setup",
  },
  {
    title: "How to Use CS50P",
    description: "Use CS50P as your primary teacher with the right habits.",
    href: "/python/how-to-use-cs50p",
  },
  {
    title: "Practice Guide",
    description: "Practice actively without tutorial hopping.",
    href: "/python/practice-guide",
  },
  {
    title: "Skill Checklist",
    description: "Check readiness before exploring new areas.",
    href: "/python/skill-checklist",
  },
];

export default function PythonPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Python Foundations"
        description="Start here for your first steps in computer science. These pages give structure around CS50P."
      />

      <Section title="Your starting path">
        <CardGrid>
          {pythonSteps.map((step) => (
            <Card
              key={step.title}
              title={step.title}
              description={step.description}
              href={step.href}
            />
          ))}
        </CardGrid>
      </Section>
    </div>
  );
}
