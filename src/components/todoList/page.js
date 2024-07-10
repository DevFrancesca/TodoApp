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

        <div className={styles.todoBottom}>
          <article className={styles.addTodo}>
            <p>Add Todo</p>
          </article>
          <section className={styles.checkedTodo}>
            <div className={styles.checkedTodoLeft}>
              <input type='check'/>
              <article className={styles.todoActivity}>
                <p className={styles.activityDate}>10-07-2024</p>
                <p className={styles.activities}>Go to gym</p>
              </article>
            </div>
            <div className={styles.checkedTodoRight}>
              <p>#reminder</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default TodoList
