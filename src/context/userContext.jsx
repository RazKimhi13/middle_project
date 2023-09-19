import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({
  users: [],
  setUsers: () => {},
  createNewUser: () => {},
  login: () => {},
});

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  
  const createNewUser = (newUser) => {
    setUsers((prev) => {
      if (prev.some((user) => user.username === newUser.username)) {
        return prev;
      }
      localStorage.setItem("users", JSON.stringify([...prev, newUser]));
      navigate("/Login"); 
      return [...prev, newUser];
    });
  };

  const login = ({ username, password }) => {
    const userExists = users.find((user) => user.username === username);
    if (!userExists) {
      return alert("Wrong credentials!");
    }
    const passwordMatch = userExists.password === password;
    if (!passwordMatch) {
      return alert("Wrong credentials!");
    }
     alert("Logged in!");
     navigate("/"); 

  };

  return (
    <UserContext.Provider value={{ users, setUsers, createNewUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
