import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import CallToAction from "../../components/CallToAction";

export default function PythonSetupPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Python Setup"
        description="Get a working Python environment in minutes so you can start learning with CS50P."
      />

      <Section
        title="Recommended: Replit"
        description="Replit runs in your browser, so there is nothing to install. It is the fastest way to start."
      >
        <div className="space-y-3 text-slate-700">
          <p>Create a free Replit account and open a new Python repl.</p>
          <p>Type the example below, then click Run.</p>
        </div>
      </Section>

      <Section
        title="Alternative: VS Code"
        description="Use VS Code if you prefer working on your own computer."
      >
        <div className="space-y-3 text-slate-700">
          <p>Install Python and VS Code, then create a file named `hello.py`.</p>
          <p>Run it from the terminal using `python hello.py`.</p>
        </div>
      </Section>

      <Section title="Hello World">
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <pre className="text-sm text-slate-800">
            <code>print("Hello, world!")</code>
          </pre>
        </div>
        <p className="text-slate-600">
          If you see the words "Hello, world!" in the output, your setup works.
        </p>
      </Section>

      <Section title="Common beginner errors">
        <div className="space-y-2 text-slate-700">
          <p>Nothing happens because the file was not saved.</p>
          <p>Typos like `pritn` or missing quotation marks.</p>
          <p>Running a different file than the one you edited.</p>
          <p>Using the wrong command (make sure it is `python`, not `pyhton`).</p>
        </div>
      </Section>

      <Section title="When you are ready to move on">
        <p className="text-slate-700">
          You are ready when you can run the Hello World example without help.
          Next, use CS50P as your main teacher.
        </p>
      </Section>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-900">
            Continue to CS50P guidance
          </h2>
          <p className="text-slate-600">
            Learn how to use CS50P effectively and avoid tutorial hopping.
          </p>
          <CallToAction
            href="/python/how-to-use-cs50p"
            label="Go to CS50P Guidance"
          />
        </div>
      </div>
    </div>
  );
}
