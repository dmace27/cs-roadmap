import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function SystemsAndNetworksPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Systems and Networks"
        description="How computers, operating systems, and networks work together."
      />

      <Section title="What this field involves">
        <p>
          Systems and networks focus on how hardware and software interact, and
          how computers communicate. In the real world, this includes building
          reliable services, optimizing performance, and understanding how data
          moves across networks.
        </p>
      </Section>
    </div>
  );
}
