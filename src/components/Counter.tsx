'use client';

import { Button, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment, selectCounterValue } from '../features/counter/counterSlice';

export default function Counter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCounterValue);

  return (
    <Stack direction="row" spacing={2} alignItems="center" data-testid="counter">
      <Button variant="contained" color="primary" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <Typography variant="h5" component="span">
        {value}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
    </Stack>
  );
}
