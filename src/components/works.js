import React from "react"
import styles from "./works.module.scss"
import Container from "./container"
import Heading from "./heading"
import Image from "../data/hn-large.jpg"
import portfolio from "../data/portfolio-sm.png"
import expensify from "../data/expensify-sm.jpg"
import natours from "../data/Natours-sm.jpg"
import nexter from "../data/nexter-sm.jpg"
import Zoom from "react-reveal/Zoom"

const Works = props => {
  return (
    <section className={styles.section} id="works">
      <Zoom>
        <Heading
          icon="briefcase"
          heading="Works"
          rider="What has he built?"
        />
      </Zoom>
      <div className={styles.content}>
        <div className={styles.content__list}>
          <div className={styles.featured}>
            <Container
              title="Portfolio Website"
              description="I learned the basics of Gatsby JS to build this webpage. Gatsby is
              a React framework that creates lightening fast, accessible applications."
              tags="Tags: React, Gatsby, SCSS, GraphQL"
              image={portfolio}
              alt="Preview image of portfolio website"
              demoLink="https://thattochi.github.io"
              githubLink="https://github.com/thattochi/thattochi.github.io"
            />
            <Container
              title="Hackernews Clone"
              description="An exact clone of the hackernews website for a YC startup's coding
                challenge as part of the recruitement process for a senior Frontend position."
              tags="Tags: JavaScript ES6, SCSS, GraphQL"
              image={Image}
              alt="Preview image of hackernews clone website"
              demoLink="https://thattochi.github.io/hackernews-clone/"
              githubLink="https://github.com/thattochi/Hackernews-clone"
            />
            <Container
              title="Expensify"
              description="Expensify is a budget management application
              built with React. It employs Redux for state management
              and Firebase for data storage and authentication."
              tags="Tags: JavaScript ES6, SCSS, React, Redux, Firebase, Jest, Enzyme"
              image={expensify}
              alt="Preview image of expensify website"
              demoLink="https://thattochi.github.io/Expensify/"
              githubLink="https://github.com/thattochi/Expensify"
            />
            <Container
              title="Natours project"
              description="Natours is a practice project for my advanced CSS and SCSS
                course. It demonstrates my knowledge of some advanced CSS properties and techniques."
              tags="Tags: CSS, SCSS"
              image={natours}
              alt="Preview image of natours website"
              demoLink="https://thattochi.github.io/Natours/"
              githubLink="https://github.com/thattochi/Natours"
            />
            <Container
              title="Nexter Project"
              description="Nexter is another practice project for my advanced CSS & SASS course.
                The module mainly focuses on advanced CSS layout techniques."
              tags="Tags: SCSS, Flexbox"
              image={nexter}
              alt="Preview image of nexter website"
              demoLink="https://thattochi.github.io/Nexter/"
              githubLink="https://github.com/thattochi/Nexter"
            />
            <Container
              title="Simple Express Server"
              description="A basic express JS server which serves up static and dynamic pages on request."
              tags="Tags: JavaScript ES6, Node JS"
              demoLink={false}
              githubLink="https://github.com/thattochi/basic-node-server"
            />
          </div>
          <div className={styles.other}></div>
        </div>
      </div>
    </section>
  )
}

export default Works
