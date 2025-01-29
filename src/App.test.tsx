import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // Mock the environment variable for the test
    process.env.NEXT_PUBLIC_USER_NAME = 'TestUser';
  });

  it('renders main heading with dynamic userName', () => {
    render(<App />);

    // Match the heading by partial text, ignoring the split between "Custom CI/CD Pipeline Demo -" and "TestUser"
    expect(
      screen.getByText((content, element) => {
        const hasText = (text: string) => text.includes('Custom CI/CD Pipeline Demo');
        const matches = hasText(content) && element?.textContent?.includes('TestUser');
        return matches;
      })
    ).toBeInTheDocument();
  });

  it('renders pipeline status sections', () => {
    render(<App />);
    expect(screen.getByText('🧪 Unit Tests')).toBeInTheDocument();
    expect(screen.getByText('⚙ Github Actions Build')).toBeInTheDocument();
    expect(screen.getByText('🚀 Deployment')).toBeInTheDocument();
  });

  it('contains link to portfolio', () => {
    render(<App />);
    const backButton = screen.getByText('Back to Portfolio');
    expect(backButton).toBeInTheDocument();
  });

  it('navigates to portfolio when back button is clicked', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
      writable: true,
    });

    render(<App />);
    const backButton = screen.getByText('Back to Portfolio');
    fireEvent.click(backButton);

    expect(window.location.href).toBe('https://danihg-portfolio.vercel.app/');
  });
});
