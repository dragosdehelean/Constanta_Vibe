import { CssBaseline, ThemeProvider } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';
import { ReduxStoreProvider } from '../store/ReduxStoreProvider';
import theme from '../styles/theme';

function renderWithProviders() {
  return render(
    <ReduxStoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Counter />
      </ThemeProvider>
    </ReduxStoreProvider>
  );
}

describe('Counter', () => {
  it('afiseaza valoarea initiala', () => {
    renderWithProviders();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('incrementeaza cand se apasa pe butonul plus', () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrementeaza cand se apasa pe butonul minus', () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});