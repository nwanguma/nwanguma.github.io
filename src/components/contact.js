import React from "react"
import Button from "./button"
import Heading from "./heading"
import styles from "./contact.module.scss"
import Tada from "react-reveal/Tada"

export default props => {
  return (
    <Tada>
      <section className={styles.section} id="contact">
        <Heading icon="envelope" heading="Contact" rider="Wow brilliant stuff! what is he up to and how can we find him?" />
        <p className={styles.content}>
          I am currently looking for a fulltime Frontend position - onsite or
          remote, I am available for in-person or online interviews.
          <br></br>
          <br></br> I make up for my obvious lack of experience with my
          willingness to learn and to improve. I'd love above everything else to
          be a great software developer who builds tools and products that
          others find useful or depend on. I am certain I would make a great
          addition to your development team.
        </p>
        <div className={styles.mail}>
          <Button data="Say Hello!" />
        </div>
      </section>
    </Tada>
  )
}
