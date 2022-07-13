import { useContext, useState} from "react";
import { UsersContext } from "../../contexts/users.context";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { onSubmitHandler } = useContext(UsersContext);
  const checkUserHandler = (event) => {
    event.preventDefault(); // Non fa refresh
    const user = onSubmitHandler(input);
    if (user !== undefined) {
        navigate('/')
    }
  };

  return (
    <div>
      <form onSubmit={checkUserHandler}>
        <input type="password" placeholder="Inserisci password" onChange={e => setInput(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
