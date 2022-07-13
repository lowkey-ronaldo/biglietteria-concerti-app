import { useEffect, useState } from "react";
import Axios from "axios";

const PostTest = () => {
  const [ruolo, setRuolo] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [password, setPassword] = useState("");
  const [clientList, setClientList] = useState([]);

useEffect(() => {
    Axios.get("http://localhost:3001/api/getClient").then((response) => {
        setClientList(response.data);
        //console.log(response.data)
    });
   
}, []);
console.log("sss"+clientList);
  const testHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insertClient", {
      ruolo: ruolo,
      nome: nome,
      cognome: cognome,
      password: password,
    }).then(() => {
        alert("ok");
    });
  };

  return (
    <div>
      <form onSubmit={testHandler}>
        <input
          type="text"
          placeholder="Inserisci ruolo"
          onChange={(e) => setRuolo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inserisci nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inserisci cognome"
          onChange={(e) => setCognome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inserisci password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
     {clientList.map( (client) => {
        return <><p>{client.Ruolo}</p>
        <p>{client.Cognome}</p>
        <p>{client.Nome}</p>
        <p>{client.Codice}</p>
        </>
    }) }
    </div>
    );
  
}

export default PostTest;
