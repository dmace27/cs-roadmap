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
          <br></br>
          <br></br>
          Systems engineers care about what happens under the hood. They work
          with operating systems, servers, cloud infrastructure, and the
          low-level pieces that keep applications running. This is the field
          behind questions like: Why is the site slow? Why does the server
          crash? How do we handle millions of requests safely?
          <br></br>
          <br></br>
          Networks work is about how machines talk to each other. It involves
          protocols, routing, reliability, and security at scale. Many software
          engineers eventually learn systems and networks because it helps them
          build faster, more stable products.
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://www.youtube.com/watch?v=Qp51XXcbaZI" target="_blank"> Beginner's Guide to Computer Networking Video</a>
          </li>
          <li>
            <a href="https://zerotomastery.io/blog/introduction-to-networking/" target="_blank">Beginners Guide To Computer Networking</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=k9ZigsW9il0" target="_blank">Computer Network Fundamentals</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
