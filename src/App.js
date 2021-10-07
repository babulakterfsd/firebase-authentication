import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import initializeAuthentication from "./Firebase/firebase.initialize";
import { Container, Row, Button, Col, Card, Form } from "react-bootstrap";
import { useState } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  let [passwordRulesShow, setPasswordRulesShow] = useState(false);
  let [response, setResponse] = useState("");
  let [isRegistered, setIsRegistered] = useState(false);

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
  //facebook signin button
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      const { displayName: name, email, photoURL: photo } = result.user;
      const loggedInUser = { name, email, photo };
      setUser(loggedInUser);
    });
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

  //handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    !isRegistered
      ? register(userEmail, userPassword)
      : login(userEmail, userPassword);
  };

  //login existing user
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setResponse("Login Successful");
      })
      .catch((error) => {
        setResponse(error.message);
      });
  };

  //create new user
  const register = (email, password) => {
    if (userPassword.length < 8) {
      setError("password must be at least 8 characters");
      return;
    } else {
      setError("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setResponse("Registration Successful");
          updateUser();
          verifyEmail();
        })
        .catch((error) => {
          setResponse(error.message);
        });
    }
  };
  //verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };

  //handle Password
  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };
  //reset forgot password
  const resetPassword = () => {
    if (userEmail) {
      sendPasswordResetEmail(auth, userEmail);
      setResponse("Password reset email sent !");
    } else {
      setResponse("Email field is empty");
    }
  };

  //handle Email
  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };
  //handle Name
  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  //update user info
  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // passwordRulesDisplayer
  const passwordRulesDisplayer = () => {
    passwordRulesShow = !passwordRulesShow;
    setPasswordRulesShow(passwordRulesShow);
  };
  //ToggleForm
  const toggleForm = (event) => {
    setIsRegistered(event.target.checked);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <Form
              className="mt-2 shadow-sm pt-3 pb-5 px-5"
              onSubmit={handleSubmit}
            >
              <h5 className="text-secondary mb-3">
                {" "}
                <i className="fas fa-user-tie text-success"></i> Please
                {!isRegistered ? " Resgister !" : " LogIn !"}
              </h5>
              {!isRegistered ? (
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    onBlur={handleName}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>
              ) : (
                <span></span>
              )}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePassword}
                  type="password"
                  placeholder="Password"
                  required
                />
                <Form.Text className="text-danger">{error}</Form.Text>
                <Form.Text className="text-danger">
                  {passwordRulesShow ? (
                    <ul className="text-muted">
                      <li>Password must contain 2 uppercase letters</li>
                      <li>must incluse at least one special character</li>
                      <li>must contain at least three lowercase letters</li>
                      <li>must incluse at least two digits</li>
                      <li>Password should be at least 8 characters long</li>
                    </ul>
                  ) : (
                    <span></span>
                  )}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="d-flex justify-content-between">
                  <Form.Check
                    onChange={toggleForm}
                    type="checkbox"
                    label="Already Registered?"
                  />
                  {!isRegistered ? (
                    <Button
                      onClick={passwordRulesDisplayer}
                      className="btn-sm btn-success text-white fw-semi-bold"
                    >
                      password rules
                    </Button>
                  ) : (
                    <Button
                      onClick={resetPassword}
                      className="btn-sm btn-danger text-white fw-semi-bold"
                    >
                      Forgot password?
                    </Button>
                  )}
                </div>
              </Form.Group>
              <p className="text-secondary">{response}</p>
              <Button variant="success" type="submit" className="px-4 py-2">
                <i className="fas fa-sign-in-alt me-2 text-warning"></i>
                {!isRegistered ? " Resgister !" : " LogIn !"}
              </Button>
            </Form>
          </div>
        </Row>
      </Container>

      <div className="divider">
        <hr className="w-50 mx-auto" />
        <h6 className="text-center text-secondary">or</h6>
      </div>
      <Container>
        <Row>
          {!user.name ? (
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
              <div className="button-container d-flex justify-content-center">
                <Button
                  className="btn-success fw-semi-bold  me-1"
                  onClick={handleGoogleSignIn}
                >
                  <i className="fab fa-google me-2 text-warning"></i>
                  SignIn with Google
                </Button>
                <Button
                  className="btn-success fw-semi-bold  me-1"
                  onClick={handleFacebookSignIn}
                >
                  <i className="fab fa-facebook me-2 text-warning"></i>
                  SignIn with Facebook
                </Button>
                <Button
                  className="btn-success fw-semi-bold"
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
                  Welcome
                  <span className="text-success">{` ${user.name}`}</span>{" "}
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
