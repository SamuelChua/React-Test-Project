import { render, screen } from '@testing-library/react';
import APIData from './APIData';

describe('APIData', () => {
  test('should render the API data', async () => {
    render(<ApiData />);

    const loadingMessage = screen.getByText(/loading data/i);
    expect(loadingMessage).toBeInTheDocument();

    const title = await screen.findByText(/sunt aut facere repellat/i);
    expect(title).toBeInTheDocument();

    const body = await screen.findByText(/quia et suscipit/i);
    expect(body).toBeInTheDocument();
  });
});
