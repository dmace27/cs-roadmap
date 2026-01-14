import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Card from "../components/Card";

const supplementalResources = [
  {
    title: "Python Documentation",
    description: "The official reference for Python syntax and libraries.",
    href: "https://docs.python.org/3/",
  },
  {
    title: "Real Python Basics",
    description: "Short articles that explain concepts when you are stuck.",
    href: "https://realpython.com/",
  },
  {
    title: "CS50P Problem Sets",
    description: "Return to the official prompts whenever you need direction.",
    href: "https://cs50.harvard.edu/python/",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Resources"
        description="Keep your resource list small. Too many sources slows you down."
      />

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-900">
          Primary Resource: CS50P
        </h2>
        <p className="mt-2 text-slate-600">
          CS50P is the main course. Start there and return there whenever you
          feel unsure. This site only provides structure around it.
        </p>
        <div className="mt-4">
          <a
            href="https://cs50.harvard.edu/python/"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Visit CS50P
          </a>
        </div>
      </div>

      <Section title="Small set of helpful references">
        <CardGrid>
          {supplementalResources.map((resource) => (
            <Card
              key={resource.title}
              title={resource.title}
              description={resource.description}
              href={resource.href}
            />
          ))}
        </CardGrid>
      </Section>

      <Section title="Avoid resource overload">
        <p>
          More resources can feel helpful but often increase confusion. If you
          already have CS50P and one reference, you have enough.
        </p>
      </Section>
    </div>
  );
}
