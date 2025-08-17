import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { Person, FileText } from "react-bootstrap-icons";
import styles from "../css/sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <Button 
        variant="light" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)} 
        className="mt-2 mb-3"
      >
        {isOpen ? "<<" : ">>"}
      </Button>

      {isOpen && (
        <div className="text-center">
          <Image 
            src="https://via.placeholder.com/80" 
            roundedCircle 
            alt="profile" 
          />
          <h6 className="mt-2">Sophia Carter</h6>
        </div>
      )}

      <ul className="list-unstyled mt-4">
        <li>
          <Link to="/dashboard/profile" className={styles.link}>
            <Person className="me-2" /> {isOpen && "Profile"}
          </Link>
        </li>
        <li>
          <Link to="/dashboard/articles" className={styles.link}>
            <FileText className="me-2" /> {isOpen && "My Articles"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
