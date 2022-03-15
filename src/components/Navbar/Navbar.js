import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Invoices & Expenses</h1>
        </Link>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <Link
            to="/invoices"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <li>Invoices</li>
          </Link>

          <Link
            to="/expenses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>Expenses</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
