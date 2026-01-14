import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Start Here"
        description="You do not need any prior experience to begin. This site helps you start coding quickly with a clear, calm path."
      />

      <div className="space-y-8">
        <Section title="What this site is">
          <p>
            A short guide to get you set up and moving in the right direction.
            It points you to CS50P as the main learning resource and gives
            simple structure so you do not have to guess what to do next.
          </p>
        </Section>

        <Section title="What this site is not">
          <p>
            It is not a course, a curriculum, or a place with assignments and
            quizzes. It will not teach Python in detail. CS50P does the
            teaching; this site provides the structure around it.
          </p>
        </Section>

        <Section title="Self-paced by design">
          <p>
            You decide your pace. Some students move quickly, others take more
            time. Both are normal. The goal is steady progress without pressure
            or tutorial hopping.
          </p>
        </Section>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            Ready to begin?
          </h2>
          <p className="text-slate-600">
            Start with setup so you can run your first Python program in a few
            minutes.
          </p>
          <CallToAction href="/python/setup" label="Go to Python Setup" />
        </div>
      </div>
    </div>
  );
}
