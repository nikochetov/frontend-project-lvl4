import '../styles/App.css';
import {
  Route, BrowserRouter as Router, Routes, useLocation, Navigate, Link,
} from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import NotMatch from './NotMatch.jsx';
import { useAuth } from '../hooks';
import Login from './Login/components/Login';
import Signup from './Signup/components/Signup';
import ChatApp from './ChatApp';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AuthButton = () => {
  const { logOut, isLoggedIn } = useAuth();

  return (
    isLoggedIn
      ? <Button onClick={logOut}>Выйти</Button>
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
            <ChatApp />
          </PrivateRoute>
      )}
      />
    </Routes>
  </Router>
);

export default App;
