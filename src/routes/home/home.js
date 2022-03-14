import styles from "./home.module.css";
import background from "../../images/background.svg";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.text_container}>
        <h1>
          My first <span>react router v6</span> tutorial
        </h1>
      </div>
      <div className={styles.img_container}>
        <img src={background} alt="" />
      </div>
    </div>
  );
}
export default Home;
