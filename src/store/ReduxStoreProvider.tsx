'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import type { AppStore } from './store';
import { makeStore } from './store';

export function ReduxStoreProvider({
  children
}: {
  children: ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
