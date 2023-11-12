import '../styles/App.css';
import {
  Route, BrowserRouter as Router, Routes, useLocation, Navigate, Link,
} from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import NotMatch from './NotMatch.jsx';
import Chat from './Chat';
import { useAuth } from '../hooks';
import Login from './Login/components/Login';
import Signup from './Signup/components/Signup';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AuthButton = () => {
  const auth = useAuth();

  return (
    auth.isLoggedIn
      ? <Button onClick={auth.logOut}>Выйти</Button>
      : null
  );
};

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
        <AuthButton />
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotMatch />} />
      <Route
        path="/chat"
        element={(
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
      )}
      />
    </Routes>
  </Router>
);

export default App;
