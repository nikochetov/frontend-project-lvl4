import { render, screen } from '@testing-library/react';
import nock from 'nock';
import userEvent from '@testing-library/user-event';
import App from '../components/App.jsx';

const host = 'http://localhost:3000';

beforeAll(() => {
  nock.disableNetConnect();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shlack/i);
  expect(linkElement).toBeInTheDocument();
});

test('login', async () => {
  render(<App />);
  nock(host)
    .post('/api/v1/login')
    .reply(200, { token: 'JWT' });

  await userEvent.click(screen.getByRole('button', { name: /log in/i }));
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // await userEvent.type(screen.getByLabelText(/username/i), 'wrongLogin');
  // await userEvent.type(screen.getByLabelText(/password/i), 'wrongPass');
  // await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await userEvent.type(screen.getByLabelText(/username/i), 'admin');
  await userEvent.type(screen.getByLabelText(/password/i), 'admin');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(await screen.findByText(/privatepage/i)).toBeInTheDocument();
});
