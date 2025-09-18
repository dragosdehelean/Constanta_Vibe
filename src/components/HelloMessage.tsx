'use client';

import { Alert, CircularProgress, Stack, Typography } from '@mui/material';
import { useGetHelloQuery } from '../features/api/baseApi';

export default function HelloMessage() {
  const { data, isLoading, isError } = useGetHelloQuery();

  if (isLoading) {
    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <CircularProgress size={20} />
        <Typography>Se incarca mesajul...</Typography>
      </Stack>
    );
  }

  if (isError) {
    return <Alert severity="error">Nu am putut incarca mesajul.</Alert>;
  }

  return <Alert severity="success">{data?.message ?? 'Salut!'}</Alert>;
}
