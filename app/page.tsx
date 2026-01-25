import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import CallToAction from "./components/CallToAction";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <PageHeader title="Home" />
      </div>

      <Section title="Introduction">
        <p className="text-slate-700">
          This website was created to help you learn computer science through self study. 
          The hardest part about learning to code or learning computer science is getting started 
          and overcoming the initial learning curve. This website aims to give young and curious high schoolers 
          the tools and chance to explore computer science. Throughout this website, you will find pages 
          about what Computer Science actually is, the steps to get started in python, and some resources to help
          you learn the basics. But probably the most important thing on the website is a detailed account from my own experience
          on learning computer science, and the things you should and shouldn't do. This website isn't
          anywhere perfect but should give you a decent platform to jump off and the tools to start exploring on your own. 
        </p>
        <br></br>
        <h3 className="text-base font-semibold text-blue-900">Recommended Use</h3>
        <p className="text-slate-700">
          This website is more of a list of great resources and advice from me. I recommend reading the 
           <Link href="/what-is-cs"> What Is CS</Link> and <Link href="/roadmap">Roadmap</Link> pages. Then, explore
           the sections about Python and How to Learn. None of this website is absolutely necessary but if you only read one thing, 
           read the pages about learning. 
        </p>
      </Section>

      <Section title="Table of contents">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 text-sm text-slate-700">
            <h3 className="text-base font-semibold text-blue-900">Start</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/what-is-cs">What Is CS</Link>
              </li>
              <li>
                <Link href="/roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <h3 className="text-base font-semibold text-blue-900">Python</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/python">Python Foundations</Link>
              </li>
              <li>
                <Link href="/python/setup">Python Setup</Link>
              </li>
              <li>
                <Link href="/python/how-to-use-cs50p">How to Use CS50P</Link>
              </li>
              <li>
                <Link href="/python/practice-guide">Practice Guide</Link>
              </li>
              <li>
                <Link href="/python/skill-checklist">Skill Checklist</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <h3 className="text-base font-semibold text-blue-900">How to Learn</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/how-to-learn/anti-tutorial-hell">
                  Anti-Tutorial Hell
                </Link>
              </li>
              <li>
                <Link href="/how-to-learn/learning-loop">Learning Loop</Link>
              </li>
              <li>
                <Link href="/how-to-learn/debugging">Debugging</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <h3 className="text-base font-semibold text-blue-900">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/teacher-guide">Teacher Guide</Link>
              </li>
              <li>
                <Link href="/next-steps">Next Steps</Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>

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
