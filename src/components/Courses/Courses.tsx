import { CoursesContainer, Wrapper } from './Courses.style';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Courses() {
  return (
    <CoursesContainer>
      <Wrapper>
        <header>
          <h3>My Classes</h3>
          <Fab variant='extended' color='primary' size='medium'>
            Add Class &ensp; <AddIcon />
          </Fab>
        </header>
        <table>
          <thead>
            <tr>
              <th>Class Topic</th>
              <th>Date</th>
              <th>AM/PM</th>
              <th>Platform</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dealing with Those who have a terminal Illness</td>
              <td>12/30/2021</td>
              <td>PM</td>
              <td>Zoom</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </CoursesContainer>
  );
}

export { Courses };
