import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import App from '../App';

describe('App', () => {
  it('renders page correctly', () => {
    render(<App />);
  });

  it('it loads "Crypto Currencies" on first render', async () => {
    render(<App />);
    expect(await screen.findByText('oin')).toBeInTheDocument();
  });

  it('navigates to Details and displays cryptocurrency details', async () => {
    render(<App />);
    expect(await screen.findByText('')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('', { name: 'Bitcoinlogo Bitcoin 45137.12' }));
    expect(await screen.findByText('oin stats')).toBeInTheDocument();
  });
});
