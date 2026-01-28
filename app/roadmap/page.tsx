import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import CallToAction from "../components/CallToAction";

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Roadmap"
      />

      <Section title="Phase 1: Fundamentals" description="These are the core skills that make everything else in CS easier.
            If you can read simple code, write small programs, and explain what
            your code does, you are on track.">
        <ul className="space-y-3 text-slate-700">
          <li>
            <strong className="text-blue-900">Syntax</strong>
          </li>
          <li>
            <strong className="text-blue-900">Data Types</strong>
          </li>
          <li>
            <strong className="text-blue-900">Control Flow</strong>
          </li>
          <li>
            <strong className="text-blue-900">Loops</strong>
          </li>
          <li>
            <strong className="text-blue-900">Functions</strong>
          </li>
        </ul>
        <div className="space-y-3 rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-blue-900">
            Learn Phase 1 with CS50P
          </h3>
          <p className="text-slate-700">
            CS50P is the primary resource for learning these fundamentals. Use
            it as your teacher, and use this site as your structure.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://cs50.harvard.edu/python/"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Visit CS50P
            </a>
          </div>
        </div>
      </Section>
      <Section
        title="Phase 2: Small Projects After CS50P"
        description="Finishing a long course is rare. Keep momentum by building."
      >
        <div className="space-y-3 text-slate-700">
          <p>
            If you complete CS50P and want to keep learning, the best next step
            is not another big course. It is small projects that reinforce what
            you just learned.
          </p>
          <p>
            Start tiny and work your way up. Each new project should add one new
            idea, library, or skill.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-base font-semibold text-blue-900">Starter project ideas</h3>
          <ul className="mt-2 space-y-1 text-slate-700">
            <li>Rock Paper Scissors</li>
            <li>Blackjack</li>
            <li>Mastermind</li>
          </ul>
        </div>
        <p className="text-slate-700">
          The goal is to keep interest high while your skills become more
          automatic. Small wins beat perfect plans.
        </p>
      </Section>

      <Section
        title="Phase 3: Specialize and Explore"
        description="Move beyond the basics by picking a direction and trying deeper work."
      >
        <ul className="space-y-4 text-slate-700">
          <li>
            <strong className="text-blue-900"><a href="https://github.com/codecrafters-io/build-your-own-x" target="_blank">Build Your Own X</a></strong>
            <p>Github Repo with lots of different tutorials</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="https://www.reddit.com/r/csMajors/comments/z4qjzx/a_guide_to_competitive_programming/" target="_blank">Competitive Programming</a></strong>
            <p>Practice solving timed problems and sharpening your thinking.</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="https://leetcode.com/problemset" target="_blank">DSA / LeetCode</a></strong>
            <p>Learn data structures and algorithms through focused drills.</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="https://www.kaggle.com/thirty-days-of-ml" target="_blank">AI / Machine Learning</a></strong>
            <p>Explore modeling, data, and math-heavy problem solving.</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="https://www.edx.org/cs50" target="_blank">Other CS50 Courses</a></strong>
            <p>Use familiar teaching style to go deeper into new areas.</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="roadmap.sh" target="_blank">Roadmap.sh</a></strong>
            <p>Use visual roadmaps to explore structured paths by domain.</p>
          </li>
          <li>
            <strong className="text-blue-900"><a href="https://youtu.be/tLKKmouUams?si=qBu0kwsxRU1gaNvc" target="_blank">Flask / FastAPI</a></strong>
            <p>Start building backends and APIs with Python.</p>
          </li>
        </ul>
        <p className="text-slate-700">
          <br></br>
          Whatever you do, don't stop learning. Spending a lot of time picking and researching for the best resource and most useful skill
          is so much less useful than just starting something. If you need help deciding, explain your current goals and situation to AI.
        </p>
      </Section>
    </div>
  );
}
