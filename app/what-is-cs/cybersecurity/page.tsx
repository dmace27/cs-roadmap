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
          <br></br>
          <br></br>
          In practice, cybersecurity is about thinking like both a builder and
          an attacker. You learn how systems break, then design them to be more
          resilient. This can include writing secure code, reviewing
          architectures, monitoring for suspicious behavior, and responding when
          something goes wrong.
          <br></br>
          <br></br>
          Cybersecurity shows up everywhere: schools, banks, hospitals, games,
          and social apps all need it. Many software engineers become better at
          their jobs by learning security basics, even if they do not become
          full-time security specialists.
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://en.wikipedia.org/wiki/Capture_the_flag_%28cybersecurity%29" target="_blank">Capture the Flag Wikipedia Page</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=7jSYXvOOD_M" target="_blank">How to get Started in Cybersecurity</a>
          </li>
          <li>
            <a href="https://www.khanacademy.org/computing/in-class-10-ict/x1b74b08f1e25aa38:network-security/x1b74b08f1e25aa38:basic-terminology/v/cybersecurity-101" target="_blank">Cybersecurity 101 from Khan Academy</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
