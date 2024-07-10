import React from 'react'
import styles from "./todoList.module.css"

const TodoList = () => {
  return (
    <div className={styles.todoListCon}>
      <section className={styles.todoWrapper}>
        <article className={styles.todoTop}>
          <div className={styles.todoTopLeft}>
            <h4 className={styles.month}>Feb</h4>
            <h4 className={styles.day}>4</h4>
          </div>
          <div className={styles.todoTopRight}>
            <h2 className={styles.greeting}>Good Afternoon.</h2>
            <h3 className={styles.question}>What's your plan for today?</h3>
          </div>
        </article>
        <div className={styles.todoBottom}></div>
      </section>
    </div>
  )
}

export default TodoList
