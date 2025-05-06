import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
  Grid,
} from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [currency, setCurrency] = useState('USD');
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const currencies = ['INR', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'USD'];

  const calculateEMI = async () => {
    setLoading(true);
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const months = parseInt(termYears * 12);
    const monthlyRate = annualRate / 12 / 100;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    let balance = principal;
    let scheduleData = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emiValue - interest;
      balance -= principalPaid;
      scheduleData.push({
        month: i,
        emi: emiValue,
        principal: principalPaid,
        interest,
        balance: balance < 0 ? 0 : balance,
      });
    }

    try {
      const response = await axios.get(
        'https://v6.exchangerate-api.com/v6/b8e2d43de88a6724c09451b6/latest/USD'
      );
      const rate = response.data.conversion_rates[currency];
      setEmi((emiValue * rate).toFixed(2));
      setSchedule(
        scheduleData.map((entry) => ({
          ...entry,
          emi: (entry.emi * rate).toFixed(2),
          principal: (entry.principal * rate).toFixed(2),
          interest: (entry.interest * rate).toFixed(2),
          balance: (entry.balance * rate).toFixed(2),
        }))
      );
      setCalculated(true);
    } catch (error) {
      console.error('Exchange rate fetch failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setLoanAmount(395000);
    setInterestRate(12);
    setTermYears(5);
    setCurrency('USD');
    setEmi(null);
    setSchedule([]);
    setCalculated(false);
  };

  const resetTable = () => {
    setEmi(null);
    setSchedule([]);
    setCalculated(false);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Loan Amount (USD)"
              variant="outlined"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Interest Rate (%)"
              variant="outlined"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Term (Years)"
              variant="outlined"
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          <Button variant="contained" onClick={calculateEMI} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'CALCULATE'}
          </Button>
          
        </Box>

        {calculated && emi && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">
              Monthly EMI: {emi} {currency}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Currency
                </Typography>
                <TextField
                  select
                  size="small"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  sx={{ minWidth: 100 }}
                >
                  {currencies.map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Button variant="outlined" color="secondary" onClick={resetTable}>
                RESET TABLE
              </Button>
            </Box>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Amortization Schedule ({currency})
            </Typography>
            <Paper sx={{ overflowX: 'auto' }}>
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell>Principal</TableCell>
                      <TableCell>Interest</TableCell>
                      <TableCell>Remaining Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {schedule.map((row) => (
                      <TableRow key={row.month}>
                        <TableCell>{row.month}</TableCell>
                        <TableCell>{row.principal} {currency}</TableCell>
                        <TableCell>{row.interest} {currency}</TableCell>
                        <TableCell>{row.balance} {currency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
