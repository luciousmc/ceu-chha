import { useState } from 'react';

// Styled Components
import { CourseRow, CoursesContainer, Wrapper } from './Courses.style';

// Material UI Components
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

// Types
import type { CourseInfo } from '../../types/class';

function Courses({ classes }: { classes: CourseInfo[] }) {
  const [data, setData] = useState<CourseInfo[]>(classes);

  return (
    <CoursesContainer>
      <Wrapper>
        <header>
          <h3>My Classes</h3>
          <Fab variant='extended' color='primary' size='medium'>
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
                data.map((course, i) => (
                  <CourseRow key={i}>
                    <TableCell>{course.topic}</TableCell>
                    <TableCell>{course.date}</TableCell>
                    <TableCell>{course.am_pm}</TableCell>
                    <TableCell>{course.platform}</TableCell>
                    <TableCell>{course.status}</TableCell>
                  </CourseRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </CoursesContainer>
  );
}

export { Courses };
