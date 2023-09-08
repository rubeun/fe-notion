import { render, screen } from '@testing-library/react';
import ResultCard from './ResultCard';

const mockData = 
  {
    INSTNM: "University of Alabama at Birmingham", 
    CITY: "Birmingham", 
    STABBR: "AL", 
    INSTURL: "www.uab.edu"
  }

test('renders result card with mock data', () => {
  render(<ResultCard uniData={mockData} />);
  const linkElement = screen.getByText(/University of Alabama at Birmingham/i);
  expect(linkElement).toBeInTheDocument();
});
