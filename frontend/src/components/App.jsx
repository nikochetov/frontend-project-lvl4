import '../styles/App.css';
import {
  Route, BrowserRouter as Router, Routes, useLocation, Navigate, Link,
} from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import Login from './Login.jsx';
import NotMatch from './NotMatch.jsx';
import Chat from './Chat';
import { useAuth } from '../hooks';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.isLoggedIn
      ? <Button onClick={auth.logOut}>Выйти</Button>
      : <Button as={Link} to="/login" state={{ from: location }}>Войти</Button>
  );
};

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg" className="shadow">
      <Container xs={9} xl={8}>
        <Navbar.Brand as={Link} to="/">Shlack</Navbar.Brand>
        <AuthButton />
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
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
