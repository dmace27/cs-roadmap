import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CallToAction from "../components/CallToAction";

export default function TeacherGuidePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Teacher Guide"
        description="You do not need to be a CS teacher to use this site. Share the link, then step back."
      />

      <Section title="What your role looks like">
        <div className="space-y-2 text-slate-700">
          <p>You are a guide, not the content expert.</p>
          <p>Your job is to encourage steady effort and calm pacing.</p>
          <p>It is okay to say, "I do not know, but you can find out."</p>
        </div>
      </Section>

      <Section title="What healthy progress looks like">
        <div className="space-y-2 text-slate-700">
          <p>Students can run Python code and explain what it does.</p>
          <p>They can solve small problems with trial, error, and persistence.</p>
          <p>They return to CS50P instead of hopping between tutorials.</p>
        </div>
      </Section>

      <Section title="How to check readiness">
        <p>
          Use the skill checklist as a light evaluation tool. It is not about
          mastery, only readiness to explore further.
        </p>
      </Section>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            View the skill checklist
          </h2>
          <p className="text-slate-600">
            Use this list to help students reflect on what they can do.
          </p>
          <CallToAction
            href="/python/skill-checklist"
            label="Go to Skill Checklist"
          />
        </div>
      </div>
    </div>
  );
}
