import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/**
 * Selector that returns the current counter value from the Redux store.
 */
export const selectCounterValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
