import { useState } from "react";
import { Person, FileText, List, ArrowLeftCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import profilePic from "../assets/image.jpg"; // ✅ Import image

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="bg-light border-end p-3 d-flex flex-column"
      style={{
        width: collapsed ? "80px" : "220px",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      {/* Collapse button at the top */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="btn btn-outline-secondary mb-3"
      >
        {collapsed ? <List size={20} /> : <ArrowLeftCircle size={20} />}
      </button>

      {/* Profile section */}
      <div className="text-center mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-circle mb-2"
          style={{
            width: collapsed ? "40px" : "70px",
            height: collapsed ? "40px" : "70px",
            objectFit: "cover",
          }}
        />
        {!collapsed && <p className="mb-0 fw-bold">Sophia Carter</p>}
      </div>

      {/* Links */}
      <Link to="/dashboard/profile" className="text-dark mb-3 d-flex align-items-center">
        <Person className="me-2" /> {!collapsed && "Profile"}
      </Link>
      <Link to="/dashboard/articles" className="text-dark mb-3 d-flex align-items-center">
        <FileText className="me-2" /> {!collapsed && "My Articles"}
      </Link>
    </div>
  );
};

export default Sidebar;
