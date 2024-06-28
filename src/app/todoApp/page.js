import React from 'react'
import styles from "./todoApp.module.css"
import Calendar from '@/components/calender/page'
import Tasks from '@/components/tasks/page'
import TodoList from '@/components/todoList/page'

const TodoApp = () => {
  return (
    <div className={styles.todoAppCon}>
      <Tasks/>
      <TodoList/>
      <Calendar/>
    </div>
  )
}

export default TodoApp
