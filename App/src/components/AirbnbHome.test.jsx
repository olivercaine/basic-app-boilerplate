import React from 'react';
import { render, screen } from '@testing-library/react';
import AirbnbHome from '@/pages/AirbnbHome';

// Mock the components to avoid dependency issues in test environment
jest.mock('@/components/AirbnbHeader', () => ({
  default: () => <div data-testid="airbnb-header">Airbnb Header</div>
}));

jest.mock('@/components/AirbnbSearchBar', () => ({
  default: () => <div data-testid="airbnb-search-bar">Airbnb Search Bar</div>
}));

describe('AirbnbHome Component', () => {
  test('renders without crashing', () => {
    render(<AirbnbHome />);

    // Check that main components are rendered
    expect(screen.getByTestId('airbnb-header')).toBeInTheDocument();
    expect(screen.getByTestId('airbnb-search-bar')).toBeInTheDocument();

    // Check for key text elements
    expect(screen.getByText(/Available next month in Brisbane/i)).toBeInTheDocument();
    expect(screen.getByText(/Popular homes in Melbourne/i)).toBeInTheDocument();
    expect(screen.getByText(/Inspiration for your next trip/i)).toBeInTheDocument();
  });
});