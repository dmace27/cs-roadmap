import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function QuantitativeFinancePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Quantitative Finance"
        description="Applying math, statistics, and code to financial markets."
      />

      <Section title="What this field involves">
        <p>
          Quantitative finance uses models and data to understand prices, risk,
          and trading behavior. In the real world, quants build tools for
          pricing, risk management, and automated strategies.
          <br></br><br></br>
          Quant finance is one of the most math-heavy fields in the world. Quantititative Finance (Quant)
          can be broken into three different sub-roles. 
          <br></br>
          Quant Traders work to find edges in the stock market to exploit to make money. Traders 
          build models and algorithms to handle thousands of trades per second. Quant trading is a
          very fast-paced environment and traders must be able to think critically and solve problems.
          <br></br><br></br>
          Quant Developers build the systems that traders use to trade. Building the fastest computers, data pipelines, 
          and optimizing every part of the trading process. Developers often write very low-level code in C or C++. 
          Developers mainly try to make software faster so that traders and researchers can perform at a high level.
          <br></br><br></br>Quant Researchers sit between Devs and Traders. Researchers help research, build models and strategies
          to help trade. Researchers will analyze data, build ML models, and create new trading strategies. 
          Researchers must have supe sharp thinking skills and be able to think of solutions to hard problems. 
        </p>
      </Section>

      <Section title="Useful resources" description="Add links for this area.">
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="https://www.youtube.com/watch?v=kuIfHJEsPkY" target="_blank">A Beginner's Guide to Quantitative Finance</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=MrAswD7hTq8" target="_blank">10 beginner level Quant Finance Project</a>
          </li>
          <li>
            <a href="https://www.pyquantnews.com/topics/get-started-with-quant-finance" target="_blank">Getting Started With Quant Finance</a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
