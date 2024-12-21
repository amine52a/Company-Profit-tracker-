import { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const initialRows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', Salary: 1600 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', Salary: 1800 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', Salary: 2200 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', Salary: 1300 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', Salary: 1100 },
  { id: 6, firstName: null, lastName: 'Melisandre', Salary: 900 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', Salary: 2100 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', Salary: 1800 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', Salary: 1200 },
];

export default function Users() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleCheckboxChange = (id) => {
    setSelectedRows(prevState =>
      prevState.includes(id)
        ? prevState.filter(rowId => rowId !== id)
        : [...prevState, id]
    );
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedRows = [...rows].sort((a, b) => {
      if (a[key] === null) return 1; // Treat null values as larger
      if (b[key] === null) return -1;
      if (typeof a[key] === 'string') {
        return direction === 'asc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
      return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
    });

    setRows(sortedRows);
    setSortConfig({ key, direction });
  };

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="Body">
          <Navbar />
          <div className="contenu1">
            <TableContainer component={Paper} className="table" sx={{ height: '400px', overflow: 'auto', width: '90%' }}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell" sx={{ width: '10%', padding: '8px' }}>Select</TableCell>
                    <TableCell className="tableCell" sx={{ width: '10%', padding: '8px' }}>ID</TableCell>
                    <TableCell
                      className="tableCell"
                      sx={{ width: '20%', padding: '8px', cursor: 'pointer' }}
                      onClick={() => handleSort('firstName')}
                    >
                      First Name
                    </TableCell>
                    <TableCell
                      className="tableCell"
                      sx={{ width: '20%', padding: '8px', cursor: 'pointer' }}
                      onClick={() => handleSort('lastName')}
                    >
                      Last Name
                    </TableCell>
                    <TableCell
                      className="tableCell"
                      sx={{ width: '20%', padding: '8px', cursor: 'pointer' }}
                      onClick={() => handleSort('Salary')}
                    >
                      Salary
                    </TableCell>
                    <TableCell className="tableCell" sx={{ width: '20%', padding: '8px' }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleCheckboxChange(row.id)}
                        />
                      </TableCell>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>{row.id}</TableCell>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>{row.firstName || 'N/A'}</TableCell>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>{row.lastName}</TableCell>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>{row.Salary}</TableCell>
                      <TableCell className="tableCell" sx={{ padding: '8px' }}>
                        <IconButton onClick={() => console.log('Edit')} size="small">
                          <EditIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton onClick={() => console.log('Delete')} size="small">
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}
