import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CallToAction from "../../components/CallToAction";

export default function HowToUseCs50pPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="How to Use CS50P"
        description="CS50P is your teacher. This site is your structure. Use both to stay steady and avoid tutorial hopping."
      />

      <Section title="What CS50P is">
        <p>
          CS50P is a free, high-quality course that teaches Python from the
          ground up. It includes lectures, examples, and problem sets that build
          real skills over time.
        </p>
      </Section>

      <Section title="How to use it effectively">
        <div className="space-y-2 text-slate-700">
          <p>Watch or read the lesson once, then move to the problem set.</p>
          <p>Write your own code from scratch, even if it starts messy.</p>
          <p>When stuck, reread the problem and test small ideas.</p>
          <p>Keep notes on errors you fix so you can spot them later.</p>
        </div>
      </Section>

      <Section title="Pacing guidance">
        <div className="space-y-2 text-slate-700">
          <p>Plan for 3 to 5 short sessions each week.</p>
          <p>A normal week can be one lesson plus one or two problem sets.</p>
          <p>If you feel lost, slow down and repeat the loop, not the lecture.</p>
        </div>
      </Section>

      <Section title="What not to do">
        <div className="space-y-2 text-slate-700">
          <p>Do not collect extra tutorials while CS50P already teaches you.</p>
          <p>Do not copy solutions or watch solution videos.</p>
          <p>Do not skip problem sets. They are where the learning happens.</p>
          <p>Do not chase speed. Slow, steady practice works better.</p>
        </div>
      </Section>

      <Section title="Remember the roles">
        <p className="text-slate-700">
          CS50P provides the teaching and practice. This site provides the
          structure and reminders to keep you on track.
        </p>
      </Section>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            Practice without extra tutorials
          </h2>
          <p className="text-slate-600">
            Learn how to practice actively and handle confusion without hopping
            to new resources.
          </p>
          <CallToAction
            href="/python/practice-guide"
            label="Go to Practice Guide"
          />
        </div>
      </div>
    </div>
  );
}
