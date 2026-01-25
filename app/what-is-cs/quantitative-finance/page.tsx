import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function QuantitativeFinancePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Quantitative Finance"
        description="Applying math, statistics, and code to financial markets."
      />

      <Section title="What this field involves">
        <p>
          Quantitative finance uses models and data to understand prices, risk,
          and trading behavior. In the real world, quants build tools for
          pricing, risk management, and automated strategies.
        </p>
      </Section>
    </div>
  );
}
