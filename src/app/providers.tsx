'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ReactNode } from 'react';
import theme from '../styles/theme';
import { ReduxStoreProvider } from '../store/ReduxStoreProvider';

export default function Providers({
  children
}: {
  children: ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ReduxStoreProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ReduxStoreProvider>
    </AppRouterCacheProvider>
  );
}
