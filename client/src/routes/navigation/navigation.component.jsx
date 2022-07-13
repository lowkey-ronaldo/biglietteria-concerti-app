import { Fragment, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { UsersContext } from "../../contexts/users.context";
import "./navigation.style.css";

const Navigation = () => {
  const { isLogged, setIsLogged } = useContext(UsersContext);
  const { loggedUser, setLoggedUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const onLogoutHandler = (e) => {
    e.preventDefault();
    setIsLogged(false);
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
      navigate("/login");
    } else {
      setLoggedUser(localStorage.getItem("user"));
    }
  }, []);

  return (
    <Fragment>
      <Navbar bg="light">
        {isLogged && (
          <Fragment>
            <Container>

              <Navbar.Collapse className="justify-content-end">

              <Nav.Link className = "nav-link" href = "/">HOME</Nav.Link>

              <Nav.Link className = "nav-link"  href = "/biglietteria">BIGLIETTERIA</Nav.Link>

              <Nav.Link className = "nav-link"  href = "/prenotazione">PRENOTAZIONI</Nav.Link>

              <Nav.Link className = "nav-link" href = "/login" onClick={onLogoutHandler}>LOGOUT</Nav.Link>

              <Navbar.Text>Loggato come: {loggedUser}</Navbar.Text>

              </Navbar.Collapse>
              
            </Container>
          </Fragment>
        )}
      </Navbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
