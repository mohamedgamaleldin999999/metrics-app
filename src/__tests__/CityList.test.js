import React from 'react';
import { render } from '@testing-library/react';
import CitiesList from '../components/CitiesList';

// Mock the react-router-dom useNavigate function
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('CitiesList component', () => {
  it('renders without errors', () => {
    const zonesData = [
      {
        name: 'City1', country: 'Country1', lat: 1, lon: 1
      },
      {
        name: 'City2', country: 'Country2', lat: 2, lon: 2
      },
    ];

    const { container } = render(<CitiesList zonesData={zonesData} />);
    expect(container).toBeInTheDocument();
  });

  it('renders cities correctly', () => {
    const zonesData = [
      {
        name: 'City1', country: 'Country1', lat: 1, lon: 1
      },
      {
        name: 'City2', country: 'Country2', lat: 2, lon: 2
      },
    ];

    const { getByText } = render(<CitiesList zonesData={zonesData} />);

    expect(getByText('City1')).toBeInTheDocument();
    expect(getByText('Country1')).toBeInTheDocument();
    expect(getByText('City2')).toBeInTheDocument();
    expect(getByText('Country2')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
