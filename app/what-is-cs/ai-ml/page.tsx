import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function AiMlPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="AI / Machine Learning"
        description="Teaching computers to learn patterns from data."
      />

      <Section title="What this field involves">
        <p>
          AI and machine learning focus on building models that make predictions
          or decisions. In the real world, this includes recommendation systems,
          text analysis, and tools that help automate repetitive tasks.
        </p>
      </Section>
    </div>
  );
}
