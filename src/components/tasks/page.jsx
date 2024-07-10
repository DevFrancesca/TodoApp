import React, { useState } from 'react';
import styles from './tasks.module.css';

const Tasks = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.tasksCon}>
      <div className={styles.tasksWrapper}>
        <section className={styles.iconText}>
          <img src="./lightening.svg" alt="icon" />
          <h2 className={styles.chesaTodo}>ChesaTodo</h2>
        </section>
        <section className={styles.myListsCon}>
          <h4 className={styles.myLists}>My Lists</h4>
          <div className={styles.listContainer}>
            {isActive ? (
              <article className={styles.active} onClick={toggleActive}>
                <p>Life</p>
                <div className={styles.middleLine}></div>
                <img src="./cancel.svg" alt="x" />
              </article>
            ) : (
              <article className={styles.inactive} onClick={toggleActive}>
                <p>Work</p>
                <p>Work</p>
                <p>Work</p>
              </article>
            )}
            <p className={styles.newList}>+ New List</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tasks;
