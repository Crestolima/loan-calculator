// HomePage.jsx
import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', pt: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom >
          Loan Calculator Dashboard
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField label="Loan Amount" variant="outlined" defaultValue={395000} />
          <TextField label="Interest Rate (%)" variant="outlined" defaultValue={12} />
          <TextField label="Term (Years)" variant="outlined" defaultValue={5} />
        </Box>

        <Button variant="contained">CALCULATE</Button>
      </Container>
    </Box>
  );
};

export default HomePage;
