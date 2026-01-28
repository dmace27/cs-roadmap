import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function DataSciencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Data Science"
      />

      <Section title="What this field involves">
        <p>
          Data science is about collecting, cleaning, analyzing, and
          visualizing data. In real work, this can mean exploring trends,
          building simple models, and communicating insights to non-technical
          teams.
          <br></br><br></br>
          Data scientists take in massive amounts of data and clean it (remove outliers or duplicates).
          They then use tools to visualize and format the data. This makes it easier to extract trends and insights. 
          They will sometimes create elementary{" "}
          <Link href="/what-is-cs/ai-ml">Machine Learning</Link> models with
          their data to forecast the future.
          A lot of this work is done with Python and Python libraries like NumPy, Pandas, Matplotlib, and Seaborn. 
          Data Scietists must be fluent in Python and Statistics.
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://www.coursera.org/articles/what-is-data-science" target="_blank">What is Data Science Article</a>
          </li>
          <li>
            <a href="https://youtu.be/RBSUwFGa6Fk?si=rpBmqGz6VK4ym2Ui" target="_blank">Data Science from IBM</a>
          </li>
          <li>
            <a href="https://youtu.be/SUsfmh2BSbg?si=R1z8yelIEdpXTr6t" target="_blank">Data Science with Python</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
