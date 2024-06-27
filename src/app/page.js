import Signup from "./auth/signup/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Signup/>
    </main>
  );
}
