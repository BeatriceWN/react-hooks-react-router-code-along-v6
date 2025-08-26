import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <main>
      <h1>User Profile</h1>
      <p>Welcome, user with ID: {id}</p>
    </main>
  );
}

export default UserProfile;