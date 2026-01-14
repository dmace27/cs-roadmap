import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CardGrid from "../../components/CardGrid";
import Card from "../../components/Card";

const ruleCards = [
  {
    title: "One primary teacher",
    description:
      "Stick with CS50P as your main source. Extra tutorials make it harder to see what matters.",
  },
  {
    title: "Build before you browse",
    description:
      "Try to write or modify code before you search. Use the confusion as a clue.",
  },
  {
    title: "Small fixes first",
    description:
      "When stuck, change one thing at a time. Avoid jumping to a full solution.",
  },
  {
    title: "Ask focused questions",
    description:
      "Search for specific errors or behaviors, not for full walkthroughs.",
  },
];

export default function AntiTutorialHellPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Avoiding Tutorial Hell"
        description="Tutorial hell happens when you keep consuming but rarely build. This page keeps you grounded."
      />

      <Section title="Why it happens">
        <p>
          Tutorials feel safe because they show every step. The problem is that
          your brain never has to decide what to do next. Progress feels fast
          but it does not stick.
        </p>
      </Section>

      <Section title="When tutorials are acceptable">
        <p>
          Short, targeted references are fine when you are stuck on a specific
          topic. Use them to answer a focused question, then return to your own
          work.
        </p>
      </Section>

      <Section title="Behavior rules that break the cycle">
        <CardGrid>
          {ruleCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardGrid>
      </Section>
    </div>
  );
}
