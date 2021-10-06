import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "./Firebase/firebase.initialize";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { useState } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState({});

  //google signin button
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName: name, email, photoURL: photo } = result.user;
        const loggedInUser = { name, email, photo };
        setUser(loggedInUser);
      })
      .catch((error) => alert(error.message));
  };

  //github signin button
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const { displayName: name, email, photoURL: photo } = result.user;
      const loggedInUser = { name, email, photo };
      setUser(loggedInUser);
    });
  };

  //handle SignOut
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return (
    <div className="App">
      <Container>
        <Row>
          {!user.name ? (
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
              <div className="button-container d-flex justify-content-center">
                <Button
                  className="btn-success fw-semi-bold my-5 me-5"
                  onClick={handleGoogleSignIn}
                >
                  <i className="fab fa-google me-2 text-warning"></i>
                  SignIn with Google
                </Button>
                <Button
                  className="btn-success fw-semi-bold my-5"
                  onClick={handleGithubSignIn}
                >
                  <i className="fab fa-github me-2 text-warning"></i>
                  SignIn with Github
                </Button>
              </div>
            </div>
          ) : (
            <Col className="col-12 col-md-8 col-lg-4 mx-auto">
              <Card className="text-center pt-2 mt-5">
                <Card.Title>
                  {user.email ? "Welcome to Google, " : "Welcome to Github, "}{" "}
                  <span className="text-success">{user.name}</span>{" "}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={user.photo}
                  className="img-fluid"
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "100%",
                    display: "block",
                    margin: "auto",
                  }}
                />
                <Card.Body>
                  <Card.Text>{user.email}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={handleSignOut}
                    className="d-block mx-auto btn-danger fw-bold px-5 py-2"
                  >
                    Logout
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
