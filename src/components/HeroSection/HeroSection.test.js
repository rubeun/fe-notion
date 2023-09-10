import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  test('renders hero section', () => {
    render(<HeroSection />);
    const linkElement = screen.getByText(/Find the university that's right for you./i);
    expect(linkElement).toBeInTheDocument();
  });
  test('has correct src and alt tag', () => {
    render(<HeroSection />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'ellipse-1.png');
    expect(logo).toHaveAttribute('alt', 'Caspar David Fried on a mountain');
  });
});

