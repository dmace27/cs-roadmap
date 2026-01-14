import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function DebuggingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Debugging"
        description="Errors are normal. Debugging is how programmers learn what their code is really doing."
      />

      <Section title="Errors are part of the work">
        <p>
          Every programmer sees errors every day. An error is not a sign that
          you are bad at coding. It is a clue about what your program expected
          and what actually happened.
        </p>
      </Section>

      <Section title="Basic strategies that work">
        <div className="space-y-2 text-slate-700">
          <p>Read the error message slowly and find the line it points to.</p>
          <p>Check for small mistakes: spelling, missing parentheses, or quotes.</p>
          <p>Print or inspect values to see what your code is doing.</p>
          <p>Change one thing at a time so you know what fixed it.</p>
        </div>
      </Section>

      <Section title="Thoughtful Googling is allowed">
        <p>
          Look up specific error messages or behaviors. Avoid searching for
          full solutions. The goal is to understand your code, not replace it.
        </p>
      </Section>
    </div>
  );
}
