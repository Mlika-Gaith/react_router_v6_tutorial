import styles from "./Nomatch.module.css";
function NoMatch() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.text}>404</h1>
        <h2 className={styles.text}>Page Not Found !</h2>
      </div>
    </div>
  );
}
export default NoMatch;
