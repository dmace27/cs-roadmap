import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CardGrid from "../../components/CardGrid";
import Card from "../../components/Card";

const commonPitfalls = [
  {
    title: "Copying full solutions",
    description:
      "It feels fast, but it skips the thinking that makes skills stick.",
  },
  {
    title: "Watching instead of building",
    description:
      "If you are not typing and changing code, learning slows down.",
  },
  {
    title: "Changing many things at once",
    description:
      "Make one small change, then observe what happened.",
  },
  {
    title: "Restarting from scratch",
    description:
      "Keep going from where you are. The struggle is part of the process.",
  },
];

export default function PracticeGuidePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Practice Guide"
        description="Practice is how you learn. This page keeps practice active, focused, and calm."
      />

      <Section title="What good practice looks like">
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Write code yourself, even if it is messy at first.</li>
          <li>Make small edits to example code and predict the outcome.</li>
          <li>Rerun the program often and notice what changes.</li>
          <li>Keep a short note of mistakes you fixed.</li>
        </ul>
      </Section>

      <Section title="How to practice without tutorials">
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Start with the CS50P problem set prompt.</li>
          <li>Write a rough plan in plain language before you code.</li>
          <li>Search for specific errors only after you try a few ideas.</li>
          <li>Return to your own code after every search.</li>
        </ul>
      </Section>

      <Section title="Confusion is normal">
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>It is okay to feel stuck. That is part of learning.</li>
          <li>Slow down, test small changes, and keep the loop going.</li>
          <li>If you need a break, pause and return later.</li>
        </ul>
      </Section>

      <Section title="Common practice traps">
        <CardGrid>
          {commonPitfalls.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Section>
    </div>
  );
}
