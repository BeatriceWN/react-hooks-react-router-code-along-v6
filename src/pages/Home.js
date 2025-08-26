import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("http://localhost:4000/users")
    .then(r => r.json())
    .then(data => {
      console.log("Fetched users:", data); 
      setUsers(data);
    })
    .catch(error => console.error(error));
}, []);

  return (
    <main>
      <h1>Home!</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}

export default Home;
