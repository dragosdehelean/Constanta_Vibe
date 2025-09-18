import { Stack, Container, Paper, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Counter from '../components/Counter';
import HelloMessage from '../components/HelloMessage';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 6 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h3" component="h1" textAlign="center">
            Bun venit in aplicatia Constanta Pass
          </Typography>
          <Typography variant="body1" textAlign="center">
            Aceasta este o aplicatie demonstrativa Next.js care foloseste Material UI, Redux Toolkit si RTK
            Query.
          </Typography>
          <HelloMessage />
          <Counter />
          <Button component={Link} href="https://mui.com" variant="outlined" target="_blank">
            Afla mai multe despre MUI
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
