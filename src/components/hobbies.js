import React from "react"
import styles from "./hobbies.module.scss"

const Hobbies = props => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        When I'm not writing code, you can find me yelling at random
        footballers, discovering the next indie/alternative music sensation,
        swinging a racket at a local tennis court, watching Anime or reading a
        book.
      </p>
    </div>
  )
}

export default Hobbies
