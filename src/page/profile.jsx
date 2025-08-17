import { Card } from "react-bootstrap";
import profilePic from "../assets/image.jpg"; // ✅ Import image

const Profile = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "22rem", borderRadius: "15px" }} className="shadow-sm">
        <Card.Body className="text-center">
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />

          {/* User Info */}
          <Card.Title className="mb-1">Sophia Carter</Card.Title>
          <Card.Subtitle className="text-muted mb-3">sophia@example.com</Card.Subtitle>
          <p>Date Joined: Jan 5, 2023</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
