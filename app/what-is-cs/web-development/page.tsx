import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";

export default function WebDevelopmentPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Web Development"
        description="Creating websites and web apps that people use in a browser."
      />

      <Section title="What this field involves">
        <p>
          Web development combines design and programming to build user-facing
          pages and the systems behind them. In the real world, it includes
          building interfaces, handling data, and making sites fast, secure, and
          accessible.
          <br></br>
          <br></br>
          Web Developmemt is usually split into a few different roles. Frontend, backend, and full-stack. 
          <br></br>
          Frontend engineers usually design how website looks and is interacted with down to every detail. 
          A great example of this I found is a <Link href="https://youtu.be/b00sgRR_Vc0" target="_blank">video from the Notion team</Link> about their website design and how
          every little detail of the user experience matters. Frontend engineers will often work a lot with design software like Figma, but also with
          coding languages like CSS, HTML, Javascript, and Typescript. 
          <br></br>
          <br></br>
          Backend engineers design how the system behind the website works. For example, the database that creates, 
          stores, and authenticates all the accounts and passwords within a system. Think of the backend as the inner workings.
          How does the website retrieve data for the user? How does the website store all the data the user might want saved? 
          All of these are problems that a backend engineer might solve. 
          <br></br>
          <br></br>
          Full-stack engineers are the bridge between those two mediums. They can work with the entire 'stack'. Basically, they are less specialized
          but know both types of development. It is a full-stack engineer's job to do the work of either frontend or backend, or bridge the gap between them. 
          Writing the pipeline for the data to come out of the database when a user logs in, and how the data is stored within the database so that it 
          can easily be displayed on the website. 
        </p>
      </Section>

      <Section
              title="Useful resources"
              description="To learn more about Web Development, check out these resources:"
            >
              <ul className="space-y-2 text-slate-700">
                <li>
                  <a href="https://www.youtube.com/watch?v=pkdgVYehiTE" target="_blank">Front-End vs Back-End vs Full-Stack Development Video</a>
                </li>
                <li>
                  <a href="https://www.coursera.org/articles/front-end-vs-back-end" target="_blank">Front vs Back end Development Article</a>
                  </li>
                <li>
                  <a href="https://www.freecodecamp.org/news/learn-relational-database-basics-key-concepts-for-beginners" target="_blank">Learning Relational Databases</a>
                </li>
              </ul>
            </Section>
    </div>
  );
}
