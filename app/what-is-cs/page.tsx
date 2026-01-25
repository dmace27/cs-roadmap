import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

const majorAreas = [
  {
    title: "Software Engineering",
    description: "Building larger apps, teamwork, and code quality.",
    href: "/what-is-cs/software-engineering",
  },
  {
    title: "Web Development",
    description: "Frontend, backend, and how the web works.",
    href: "/what-is-cs/web-development",
  },
  {
    title: "Data Science",
    description: "Working with data, analysis, and visualization.",
    href: "/what-is-cs/data-science",
  },
  {
    title: "AI / Machine Learning",
    description: "Models that learn from data to make predictions.",
    href: "/what-is-cs/ai-ml",
  },
  {
    title: "Cybersecurity",
    description: "Protecting systems, data, and users.",
    href: "/what-is-cs/cybersecurity",
  },
  {
    title: "Systems and Networks",
    description: "How computers, operating systems, and networks run.",
    href: "/what-is-cs/systems-and-networks",
  },
  {
    title: "Game Development",
    description: "Interactive systems, graphics, and real-time logic.",
    href: "/what-is-cs/game-development",
  },
  {
    title: "Quantitative Finance",
    description: "Using math and code to model markets and risk.",
    href: "/what-is-cs/quantitative-finance",
  },
];

export default function WhatIsCsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="What Is Computer Science?"
        description="By definition, computer science is the study of how to solve problems with computers and how those solutions are designed."
      />

      <p className="text-slate-700">
        To me, computer science is about giving computers and using a computer to solve problems. 
        Whether the problem is finding sum of a very large number, trading stocks on the stock market, or predicting the next word with an LLM. 
        There are many different sub-fields of computer science. Below, are the main fields that companies will hire for. Most, if not all jobs
        make use of more than one of these fields.
      </p>

      <Section title="Major areas of computer science">
        <CardGrid>
          {majorAreas.map((area) => (
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
