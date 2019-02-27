import React from "react"

import '../styles/Project.scss'

const Concatenate = props => (
  <div className="Project">
    <div className="inner">
      <article itemProp="text">
        <h1>Concatenate</h1>
        <p>
          The client side of an app designed to display progress. Click{" "}
          <a
            href="https://naturalbornchiller.github.io/concatenate-client/#/"
            title="concatenate-client">
             here
          </a>{" "}
          to try it out!
        </p>
        <p>
          Or click{" "}
          <a
            href="http://github.com/naturalbornchiller/concatenate-api"
            title="concatenate-api"
          >
            here
          </a>{" "}
          to view the server side repository.
        </p>
        <hr />
        <p>
          Concatenate is a simple but effective way for users to track the
          repetition of tasks and form habits.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://user-images.githubusercontent.com/43046847/53427231-92b9ec00-39b6-11e9-9482-e10dc9ca9c68.png"
          >
            <img
              src="https://user-images.githubusercontent.com/43046847/53427231-92b9ec00-39b6-11e9-9482-e10dc9ca9c68.png"
              alt="screenshot"
              style={{ maxWidth: "100%" }}
            />
          </a>
        </p>
        <h2>
          The concept is simple:
        </h2>
        <ol>
          <li>A new user ("The User") logs into our app.</li>
          <li>
            The User adds one (or more) new daily task(s) e.g., "write",
            "program", "meditate", etc. to be tracked.
          </li>
          <li>
            Tracked tasks (called "Chains") last for each day that The User logs
            in and clicks "concat!" on the daily task they have performed. In this
            way, Chains, marked by passing days, grow longer, providing users with
            a visual representation of incremental progress. If The User fails to
            log onto the app and continue the Chain, the Chain is broken, forcing
            her to start over.
          </li>
          <li>See how long you can keep it going!</li>
        </ol>
        <h3>
          Planning process / problem solving strategies
        </h3>
        <p>
          The idea for this app stems from advice that developer and comic Brad
          Isaac received from Jerry Seinfield in a comedy club. Isaac tells it
          like this:
        </p>
        <blockquote>
          <p>
            Years ago when Seinfeld was a new television show, Jerry Seinfeld was
            still a touring comic. At the time, I was hanging around clubs doing
            open mic nights and trying to learn the ropes. One night I was in the
            club where Seinfeld was working, and before he went on stage, I saw my
            chance. I had to ask Seinfeld if he had any tips for a young comic.
            What he told me was something that would benefit me a lifetime...
          </p>
          <p>
            He said the way to be a better comic was to create better jokes and
            the way to create better jokes was to write every day. But his advice
            was better than that. He had a gem of a leverage technique he used on
            himself and you can use it to motivate yourself—even when you don't
            feel like it.
          </p>
          <p>
            He revealed a unique calendar system he uses to pressure himself to
            write. Here's how it works.
          </p>
          <p>
            He told me to get a big wall calendar that has a whole year on one
            page and hang it on a prominent wall. The next step was to get a big
            red magic marker.
          </p>
          <p>
            He said for each day that I do my task of writing, I get to put a big
            red X over that day. "After a few days you'll have a chain. Just keep
            at it and the chain will grow longer every day. You'll like seeing
            that chain, especially when you get a few weeks under your belt. Your
            only job next is to not break the chain."
          </p>
          <p>
            "Don't break the chain," he said again for emphasis.{" "}
            <a
              className="src"
              href="https://lifehacker.com/jerry-seinfelds-productivity-secret-281626"
              title="source"
              rel="nofollow"
            >
              <sup>1</sup>
            </a>
          </p>
        </blockquote>
        <p>
          It took me a while to realize the importance of incremental growth, but
          now that I do, I can't overstate its benefits enough. By doing something
          once a day, even with just a little effort, a person can transform themselves, bit by bit.
        </p>
        <hr/>
        <p>
          I began the process of building an app from the ground up. I started
          with user stories and ERDs, picked which tools to use, and began to
          articulate, on paper first, then programmatically, how the data might be
          stored, then retrieved and displayed for the client.
        </p>
        <p>
          Because I needed to devise a way of storing data that evolves with time,
          I started with the server. This enterprise was more difficult than I
          initially imagined for two reasons:
        </p>
        <ol>
          <li>
            Using Express with Mongoose is hard. Persisting evolving nested data
            in Mongo is already a pain, but worse I found the Mongoose documentation
            to be abysmal. There are some good unofficial docs that explain things
            much cleared so I'd keep an eye out for those.
          </li>
          <li>
            Dealing with JavaScript's Date objects is a pain. I'm not that
            quantitative to begin with, and having to manipulate Date objects and
            then convert from milliseconds to minutes/hours/days, from strings to
            numbers and back, leaves a ton of room for error. Which is not to say
            I didn't enjoy solving date/time puzzles or taming the legendary
            Mongoose. In fact, I very much did.
            (<strong>Edit:</strong> I have since discovered Moment.js.)
          </li>
        </ol>
        <p>
          The next hurdle I volunteered myself to overcome was learning React. I'm
          glad I spent time familiarizing myself with the library, as it's one I want
          to use for future projects; however I really could have stuck to Vanilla
          JS for this one. All in all though, I really got to see the power of the
          React, how, with state and props, you can fluidly circulate data throughout
          the body of a program.
        </p>
        <p>
          Most of my process involves trial-and-error. I stare at a big problem
          (How to represent the chains programmatically?) and parse it into
          related subproblems (What is a chain? How is a chain broken? How is it
          extended? How can I efficiently store it in the backend?). I find that,
          by solving subproblems in succession, I can effectively answer
          whatever superproblem I'm wrestling with (how to build a website for example)
          —and I did so in this case mostly by playing until the pieces fit..
        </p>
        <p>
          Lastly, this time around, I learned a lot about debugging. The secret is
          CONSOLE LOG EVERYTHING. By doing so your program is laid bare—you can
          see exactly what each variable holds and how it is mutated by the
          functions you <i>thought</i> did something completely different..
        </p>
        <h3>
          Goals for Future Incarnations
        </h3>
        <p>
          Ideally, I'd like for this to be an app, with reminders and whatnot. Bar
          that, I want to display the "chains" on a full-year calendar, rather
          than as discrete threads. Also, I'd like to present the user with more
          data on their chains (totalDaysTracked, combinedChainLength, etc.).
          Finally I'd like to make the UI more satisfying to view and use.
        </p>
        <h3>
          Technologies Used
        </h3>
        <ul>
          <li>Backend: Node with Express.js and Mongoose</li>
          <li>Frontend: HTML, SCSS, JavaScript, React</li>
        </ul>
      </article>
    </div>
  </div>
)

export default Concatenate
