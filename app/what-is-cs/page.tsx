import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

export default function WhatIsCsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="What Is Computer Science?"
        description="Computer science is the study of how to solve problems with computers and how those solutions are designed."
      />

      <Section title="A simple view">
        <p>
          Computer science is about building systems that follow clear rules to
          solve real problems. It includes how we represent information, how we
          design programs, and how computers carry out instructions.
        </p>
      </Section>

      <Section title="Common misconceptions">
        <div className="space-y-2 text-slate-700">
          <p>Computer science is not the same as fixing computers.</p>
          <p>It is not only about math, and it is not only about coding.</p>
          <p>You do not need to be a genius to start learning it.</p>
        </div>
      </Section>

      <Section title="Where Python fits">
        <p>
          Python is a beginner-friendly language that helps you practice core
          ideas quickly. It is widely used in software, data, and automation,
          making it a strong first step.
        </p>
      </Section>
    </div>
  );
}
