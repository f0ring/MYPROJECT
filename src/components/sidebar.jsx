import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Person, FileText } from "react-bootstrap-icons";
import styles from "../css/sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.topSection}>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className={styles.avatar}
        />
        {isOpen && <span className={styles.name}>Sophia Carter</span>}
      </div>

      <button className={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "«" : "»"}
      </button>

      <ul className={styles.menu}>
        <li className={location.pathname.includes("profile") ? styles.active : ""}>
          <Link to="/dashboard/profile">
            <Person size={20} />
            {isOpen && <span> Profile</span>}
          </Link>
        </li>
        <li className={location.pathname.includes("articles") ? styles.active : ""}>
          <Link to="/dashboard/articles">
            <FileText size={20} />
            {isOpen && <span> My Articles</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
