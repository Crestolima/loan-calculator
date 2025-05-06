import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  CircularProgress,
  Box,
} from '@mui/material';
import axios from 'axios';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const API_URL = 'https://v6.exchangerate-api.com/v6/b8e2d43de88a6724c09451b6/latest/USD';
 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(API_URL);
        setRates(response.data.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const rateEntries = Object.entries(rates);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="exchange rates table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Currency</strong></TableCell>
              <TableCell align="right"><strong>Rate</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rateEntries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell>{currency}</TableCell>
                  <TableCell align="right">{rate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rateEntries.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 25, 50]}
        />
      </TableContainer>
    </Box>
  );
};

export default ExchangeRates;
