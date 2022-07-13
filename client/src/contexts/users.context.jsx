import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const UsersContext = createContext({
  users: [],
  onSubmitHandler: () => {},
  isLogged: false,
  loggedUser: "",
  setLoggedUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const urlUsers = "http://localhost:3001/api/getClient";

  const [fetchUsers, setFetchUsers] = useState([]);
  const [users, setUsers] = useState(fetchUsers);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
  const [id, setId] = useState(localStorage.getItem("id"))
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    Axios.get(urlUsers)
    .then((response) => {
      setFetchUsers(response.data);
    });
  }, []);

  useEffect(() => {
    setUsers(fetchUsers);
  }, [fetchUsers]);


  // Funzione responsabile di cercare se esiste il codice cliente nel database
  const onSubmitHandler = (input) => {
    const user = users.find((user) => {
      return user.Codice === input;
    });

    if (user !== undefined) {
      setLoggedUser(user.nome);
      setIsLogged(true);
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user", user.Nome);
      localStorage.setItem("id", user.ClienteID )
    } else {
      alert("Codice cliente sbagliato");
    }

    return user;
  };

  const value = {
    users,
    onSubmitHandler,
    isLogged,
    setIsLogged,
    loggedUser,
    setLoggedUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
