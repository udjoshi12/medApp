import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, price, quantity, dealer, total) {
  return { name, price, quantity, dealer, total };
}

const rows = [
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
  createData('Paracetamol', 10, 500, 'DevSharma', 5000),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{ boxShadow: 'none', border: '1px solid #e2e2e2' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: '#4caf50' }}>
          <TableRow>
            <TableCell style={{ borderRight: '1px solid #ccc', fontWeight: 'bold', color: '#fff' }}>Medicine</TableCell>
            <TableCell align="right" style={{ borderRight: '1px solid #ccc', fontWeight: 'bold', color: '#fff' }}>Price</TableCell>
            <TableCell align="right" style={{ borderRight: '1px solid #ccc', fontWeight: 'bold', color: '#fff' }}>Quantity</TableCell>
            <TableCell align="right" style={{ borderRight: '1px solid #ccc', fontWeight: 'bold', color: '#fff' }}>Dealer</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold', color: '#fff' }}>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: '#dcedc8' },
                '&:nth-of-type(even)': { backgroundColor: '#f1f8e9' },
              }}
            >
              <TableCell component="th" scope="row" style={{ borderRight: '1px solid #ccc', color: '#000' }}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ borderRight: '1px solid #ccc', color: '#000' }}>{row.price}</TableCell>
              <TableCell align="right" style={{ borderRight: '1px solid #ccc', color: '#000' }}>{row.quantity}</TableCell>
              <TableCell align="right" style={{ borderRight: '1px solid #ccc', color: '#000' }}>{row.dealer}</TableCell>
              <TableCell align="right" style={{ color: '#000' }}>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
