import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CardGrid from "../../components/CardGrid";
import Card from "../../components/Card";

const loopSteps = [
  {
    title: "Predict",
    description:
      "Before you run code, guess what it will do. Even a wrong guess helps you learn.",
  },
  {
    title: "Run",
    description:
      "Run the code and compare the result to your prediction.",
  },
  {
    title: "Explain",
    description:
      "Explain why the result happened. Use simple language and focus on cause and effect.",
  },
  {
    title: "Modify",
    description:
      "Change one small thing and predict again. This is where understanding grows.",
  },
  {
    title: "Repeat",
    description:
      "Keep the loop small and steady. The repetition builds confidence.",
  },
];

export default function LearningLoopPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="The Learning Loop"
        description="Predict → Run → Explain → Modify → Repeat. This loop makes your learning active."
      />

      <Section title="Use this loop for every problem">
        <p>
          The loop keeps you focused on understanding instead of memorizing.
          You are not expected to get it right the first time. The goal is to
          notice what changes when you change the code.
        </p>
      </Section>

      <Section title="The steps">
        <CardGrid>
          {loopSteps.map((step) => (
            <Card
              key={step.title}
              title={step.title}
              description={step.description}
            />
          ))}
        </CardGrid>
      </Section>
    </div>
  );
}
