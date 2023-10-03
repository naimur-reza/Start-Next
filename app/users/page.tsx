import React from 'react'
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const UserPage = async() => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  console.log(users);
  return (
      <div>
        <ul>
          {users.map((user) => (
            <>
              <li key={user.id}>
                {" "}
                Name: {user.name}
                Email : {user.email}
              </li>
            </>
          ))}
        </ul>
      </div>
  )
}

export default UserPage