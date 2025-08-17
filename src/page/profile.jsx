import { Card, Badge } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container mt-4">
      <Card style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/200" />
        <Card.Body>
          <Card.Title>Sophia Carter</Card.Title>
          <Card.Text><strong>Email:</strong> sophia@example.com</Card.Text>
          <Card.Text><strong>Date Joined:</strong> Feb 12, 2022</Card.Text>
          <Card.Text>
            <strong>Status:</strong> <Badge pill bg="success">Active</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
