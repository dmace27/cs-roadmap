import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function DataSciencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Data Science"
        description="Using data to understand patterns and support decisions."
      />

      <Section title="What this field involves">
        <p>
          Data science is about collecting, cleaning, analyzing, and
          visualizing data. In real work, this can mean exploring trends,
          building simple models, and communicating insights to non-technical
          teams.
        </p>
      </Section>
    </div>
  );
}
