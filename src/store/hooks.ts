'use client';

import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * Hook typed pentru dispatch-ul Redux Toolkit al aplicatiei.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Hook typed pentru selectorii Redux ai aplicatiei.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
