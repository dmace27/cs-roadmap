import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

export default function HowToLearnPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="How to Learn"
        description="
        One page of guidance. This is kind of a ramble 
        and like blog post of my thoughts but they might be useful. A good amount of the content and text on this website is AI generated (even though the structure was completely thought through by me) 
        but my thoughts on this page are 100% my own words. I quite enjoyed writing all this I might start a blog one day."
      />

      <Section title="A Disclaimer About Learning Computer Science">
        <p className="text-slate-700">
          Computer Science is hard. Thousands and thousands of people try to get into computer Science
          to get a 6-figure work from home job. This is the reality of 10 years ago. Now, it harder than ever
          to find work, even if you attend a top school or grind Leetcode or build lots of projects. 
          Computer Science is one of the only majors where going to college and getting a good GPA and referneces
          can land you a great job (I would consider high-tier banking, consulting, and pre-med the exceptions). 
          Computer Science is going to take a lot more work than many other career paths you might take. 
          Because of the rise of AI and how quickly the field of computer science is evolving, 
          there will always be new things to learn and new frameworks to adapt. Because of this speed, 
          university isn't representative of current field. However, companies want to hire candidates that are up to date and 
          and have useful skills for the current landscape. It is up to you to bridge the gap. 
        </p>
      </Section>

      <Section title="Tutorial Hell">
        <p className="text-slate-700">
          The accessibility barrier for information is lower than it has ever been, especially for comptuer science.
          There are millions of hours of tutorials on YouTube alone and millions of pages of books in free PDFs. Ranging from the simplest
          python tutorials to the most complex machine learning papers. With this swath of material comes challenges. 
          It is common for early learners of computer science to get stuck in 'Tutorial Hell' where you spend months or years
          following tutorial after tutorial without ever retaining information that you have learned. I personally spent 2 summers
          in tutorial hell and finally have escaped, mainly due to the techniques from the next section.
        </p>
      </Section>

      <Section title="How to Learn Computer Science">
        <p className="text-slate-700">
          Learning how to code is something that many people struggle with. The intial learning curve is very large. 
          Many people will click on the first video on YouTube and start learning from there. If the person doesn't give up during the video,
          they make it to the end realize they've forgotten almost everything they've learned. Or, they don't actually know how to apply it. 
          Finding a structured course, whether a school class or an online course, creates an environment where the student
          is forced to apply their knowledge after learning something. The thing that snapped me out of Tutorial Hell was taking Harvard's 
          CS50 for Python. Not just watching the youtube video but doing the assignments along with. This showed me the 
          importance of building. Building small things as you go along is the best way that I've found to retain things and keep motivation. 
          After learning a new thing, you should immediately try to build with it. In the opposite sense, only learn things that will be useful 
          to build projects with. If you don't know what to learn next or what to build next, do not hesitate to ask AI. 
        </p>
      </Section>

      <Section title="Proper and Practical Usage of AI">
        <p className="text-slate-700">
          AI is a powerful tool to learn. But using AI as a shortcut is bad and will hinder your performance and ability to achieve your goals. 
          If you've read this far, I assume that you're somewhat ambitious/motivated. If you truly want to become a great computer scientist, 
          the ability to learn and solve problems will be your biggest advantages. Because of how fast the field changes, investing your life
          into something that might get replaced is futile, but solving problems will never go away. 
          <br></br>
          Some of the rules that I've set for myself for AI usage is that if you're building a project to learn to apply a new skill, 
          0% of the code should be written with AI. However, using the AI to help you research or point you in the direction of the solution is very helpful. 
          A lot of it relies on personal boundaries that you set based on your goals and situation. Using tools like <a href="notebooklm.google" target="_blank">Notebook LM </a>
          and Guided Learning from <a href="gemini.google.com" target="_blank">Gemini</a> will certainly help you learn things or help you study for tests.
          <br></br>
          Using AI for research is something a lot of people underestimate. Not just using AI to research a topic for your paper but using AI to make plans and things to do. 
          During winter break of my junior year, my goal was to get into a very prestigious college for computer science. I laid out my current plan,
          my past achievements, classes, grades, test scores, etc. I asked it for advice on the best course of action to maximize my chances of getting in. 
          It gave me a 12 month plan to follow before college applications are due. Regrettably, I didn't follow the plan as much as I should have but 
          still implemented multiple things that I would have never thought of on my own. After reflection, if I had followed even 50% of the plan, I would've probably gotten into an Ivy League. 
          This obviously won't work for everyone it cotingent on many things.
          <br></br>
          In general, usage of AI comes down to your character. I personally use AI to help me plan things, learn things, and automate busy work. I predict that having basic prompt
          engineering skills will come in handy if you want to do the same. Reading the prompt engineering guides from <a href="https://www.kaggle.com/whitepaper-prompt-engineering" target="_blank">Google </a> 
          or <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank">OpenAI</a> is a good start. It also helps to have a decent understanding of <a href="https://youtu.be/LPZh9BOjkQs?si=t2zTNi6aUk0O5L_i" target="_blank">how LLMs work</a>.

        </p>
      </Section>

      <Section title="The Future of Software Engineering (and AI's effect on it)">
        <p className="text-slate-700">
          You might have poeple tell you that software engineers are going to get replaced by AI and that it isn't worth it to learn to code. 
          I personally think this is stupid. Over the next 10 years, the work force necessary to produce the same amount of software will drastically decrease
          and this will cause companies to hire less and less, espeically in junior or low-level roles. 
          Because of the advancement of AI models, code produced by AI is 100 times cheaper (~10k/month for a junior dev compared to 100/month for a Claude Max subscription).
          However, any competent executive
          will realize there needs to be some influx of new talent and personnel, especially as senior engineers retire. Companies will not completely
          stop hiring for junior positions. There will still be opportunities, they will just be smaller and harder to achieve. In a sense, companies will
          only desire the top 10% of candidates. Only the best applicants coming out of college will get job offers, and they will get all the job offers. 
          This creates a sort of 'ultra-meritocracy' (I came up with this term myself just now). Only the best of the best will get big tech jobs. 
          I am not saying this to scare you or fear monger but I think this is the incoming reality. These top applicants must be able to leverage AI to their advantage.
          I've personally thought a lot about this as I am staking my own future on it. Never have I considered that I would switch career paths. I believe that I can compete and 
          succeed in an ultra-meritocracy. In fact, the challenge excites me. You might be different, though. If you are considering pursuing software engineering as a field, 
          it would be a good idea to think it through. It is kind of sad that you have to plan out your whole life in the middle of high school but that's the price of making it to the top. 
          <br></br>
          There is evidence to say that this meritocracy will start to take affect in other white collar industries quite soon because of AI. The most important thing
          is to pick something you are passionate about and perferably have a natural talent for. 
        </p>
      </Section>

      <Section title="General Advice and Closing Thoughts">
        <p className="text-slate-700">
          Some smaller things:
          <br></br>
           - If you have ethical or environmental concerns about AI, I encourage you to watch <a href="https://youtu.be/H_c6MWk7PQc?si=7-EG9hyvbdOKNSnP" target="_blank">Hank Green's Video</a> on water usage
          and then do your own research from there. 
          <br></br>
           - If you want to get into a very prestigious university for computer science I encourage you to try Competitive Programming and doing comepetitions like <a href="https://usaco.org/">USACO</a>, 
           <a href="https://codeforces.com/" target="_blank"> Codeforces</a>, or even just regular math competitons. Achieving USACO Platinum would put you in the top 0.1% of applicants. If you want more information about 
           CS and STEM awards for college applications, I encourage you to ask AI about "Tier 1, 2, and 3 STEM Awards".
          <br></br>
           - I have a habit of giving unnecessary advice and this page is definitely an example of this. 
          I'll probably start a blog at some point to give myself an outlet for this.
        </p>
      </Section>
    </div>
  );
}
