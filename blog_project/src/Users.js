
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/blog/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export function UsersId() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  function GoToBlog(){
    navigate('/blog')
  }

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const selectedUser = users.find(
    (user) => user.id === Number(id)
  );

  return (
    <div>
      {selectedUser ? (
        <div>
          <h1>User: {selectedUser.name}</h1>
          <Link to={`/blog/users/${id}/favorites`}>
            Go to favorites page
          </Link>
          <p></p>
          <Link to={`/blog/users/${id}/history`}>
            Go to history page
          </Link>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
      <p></p>
      <button onClick={GoToBlog}>Go to blog page</button>
    </div>
  );
}

export function Favorites() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  function GoToBlog(){
    navigate('/blog')
  }

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const selectedUser = users.find(
    (user) => user.id === Number(id)
  );

  return (
    <div>
      {selectedUser ? (
        <div>
          <h1>{selectedUser.name}'s Favorites</h1>
          <label>Favorite Game: {selectedUser.favGame}</label>
          <p></p>
          <label>Favorite Song: {selectedUser.favSong}</label>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
      <p></p>
      <button onClick={GoToBlog}>Go to blog page</button>
    </div>
  );
}

export function History() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  function GoToBlog(){
    navigate('/blog')
  }

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const selectedUser = users.find(
    (user) => user.id === Number(id)
  );

  return (
    <div>
      {selectedUser ? (
        <div>
          <h1>{selectedUser.name}'s History</h1>
          <label>Date Created: {selectedUser.dateCreated}</label>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
      <p></p>
      <button onClick={GoToBlog}>Go to blog page</button>
    </div>
  );
}
