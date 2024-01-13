import { useState } from 'react';
import { ClassRow, ClassTableContainer, Wrapper } from './ClassTable.style';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ClassInfo } from '../../types/ClassInfo';

function ClassTable({ classes }: { classes: ClassInfo[] }) {
  const [data, setData] = useState(classes);

  return (
    <ClassTableContainer>
      <Wrapper>
        <header>
          <h3>My Classes</h3>
          <Fab variant="extended" color="primary" size="medium">
            Add Class &ensp; <AddIcon />
          </Fab>
        </header>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: 'transparent' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Class Topic</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>AM/PM</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((classObj, i) => (
                  <ClassRow key={i}>
                    <TableCell>{classObj.topic}</TableCell>
                    <TableCell>{classObj.date.toDateString()}</TableCell>
                    <TableCell>{classObj.am_pm}</TableCell>
                    <TableCell>{classObj.platform}</TableCell>
                    <TableCell>{classObj.status}</TableCell>
                  </ClassRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        poop
      </Wrapper>
    </ClassTableContainer>
  );
}

export { ClassTable };
