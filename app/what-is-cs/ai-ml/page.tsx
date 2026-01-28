import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function AiMlPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="AI / Machine Learning"
        description="Teaching computers to learn patterns from data."
      />

      <Section title="What this field involves">
        <p>
          AI and machine learning focus on building models that make predictions
          or decisions. In the real world, this includes recommendation systems,
          text analysis, and tools that help automate repetitive tasks.

          <br></br><br></br>
          Machine Learning models are often built after Data Scientists have cleaned data to train on. 
          This field is very math-heavy, especially for high schoolers. Most of machine learning theory 
          models rely on Linear Algebra, Multivariable Calculus, and Probability. If you really want to pursue
          AI and machine learning, the first step is to learn a lot of the necessary math. Machine Learning is 
          mainly done in Python and related libraries like PyTorch and TensorFlow.
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://youtu.be/aircAruvnKk?si=HPY_IAgtY4VdSmn5" target="_blank">What is a Neural Network by 3Blue1Brown</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=PeMlggyqz0Y" target="_blank">Machine Learning Explained in 100 Seconds</a>
          </li>
          <li>
            <a href="https://mml-book.github.io/book/mml-book.pdf" target="_blank">Mathematics for Machine Learning Textbook</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
