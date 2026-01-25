import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function CybersecurityPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Cybersecurity"
        description="Protecting systems, data, and users from harm."
      />

      <Section title="What this field involves">
        <p>
          Cybersecurity focuses on preventing, detecting, and responding to
          threats. In real settings, this includes securing networks, finding
          vulnerabilities, and building safer systems.
        </p>
      </Section>
    </div>
  );
}
