import { CoursesContainer, Wrapper } from './Courses.style';

function Courses() {
  return (
    <CoursesContainer>
      <Wrapper>
        <header>
          <h3>My Classes</h3>
          <button>Add Class +</button>
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
