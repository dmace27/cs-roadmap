import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function SoftwareEngineeringPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Software Engineering"
        description="Building reliable software that other people can use and maintain."
      />

      <Section title="What this field involves">
        <p>
          Software engineering is about designing, building, and maintaining
          larger applications. In real projects, it includes teamwork, code
          reviews, testing, and long-term maintenance so the software stays
          stable and useful.
          <br></br>
          Software Engineering is the main role that companies will hire for. 
          A software engineer has the most breadth of use cases. Software Engineers (SWEs) 
          could do anything a company needs that remotely needs any sort of online interface. 
          The principles of Software Engineering apply no matter what other sub-field you pursue. 
          A big part of all computer science is version control. Answering the question of how multiple 
          people can work on the same files or code is really important. Git a way to control the version 
          of all the different files that are being worked on and store them so that everyone can access and edit them. 
          Git is arguably the most important skill for any computer scientist. 
        </p>
      </Section>

      <Section
        title="Useful resources"
        description="To learn more about Software Engineering, check out these resources:"
      >
        <ul className="space-y-2 text-slate-700">
          <li>Resource 1</li>
          <li>Resource 2</li>
          <li>Resource 3</li>
        </ul>
      </Section>
    </div>
  );
}
