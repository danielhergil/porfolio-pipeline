import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders main heading', () => {
    render(<App />);
    expect(screen.getByText('CI/CD Pipeline Demo')).toBeInTheDocument();
  });

  it('renders pipeline status sections', () => {
    render(<App />);
    expect(screen.getByText('🧪 Unit Tests')).toBeInTheDocument();
    expect(screen.getByText('🐳 Docker Build')).toBeInTheDocument();
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
