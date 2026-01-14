import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CallToAction from "../../components/CallToAction";
import Checklist from "../../components/Checklist";

const checklistItems = [
  "I can run a Python file and see the output.",
  "I can explain what a variable is in plain language.",
  "I can use if statements to make simple decisions.",
  "I can use loops to repeat work in small programs.",
  "I can write and call a function with inputs and a result.",
  "I can read an error message and try a small fix.",
  "I can solve a small problem by breaking it into steps.",
  "I can look up documentation for a function or library.",
];

export default function SkillChecklistPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Python Skill Checklist"
        description="This is a self-check, not a test. If you can do most of these, you are ready to explore other paths."
      />

      <Section title="Check what feels true for you">
        <Checklist items={checklistItems} />
      </Section>

      <Section title="Not mastery, just readiness">
        <p>
          You do not need to be perfect. This list only signals that you are
          ready to explore more areas of computer science if you want to.
        </p>
      </Section>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            What to do next
          </h2>
          <p className="text-slate-600">
            You have permission to explore. See gentle next steps that do not
            lock you into a single path.
          </p>
          <CallToAction href="/next-steps" label="Go to Next Steps" />
        </div>
      </div>
    </div>
  );
}
