import { DashboardContainer, DashboardHeader } from './Dashboard.style';
import DashboardBanner from '../../components/DashboardBanner';
import Courses from '../../components/Courses';
import { logoutUser } from '../../services/firebase';
import dummyData from '../../components/Courses/course_dummy_data.json';
import { Avatar } from '@mui/material';
import { type StudentCourseInfo } from '../../components/Courses/Courses.types';

function Dashboard() {
  const data = dummyData as unknown as StudentCourseInfo;

  const classes = data.classes.map((course) => {
    return { ...course, date: new Date(course.date) };
  });

  return (
    <DashboardContainer>
      <DashboardHeader>
        <p>Help</p>
        <div style={{ cursor: 'pointer' }} onClick={() => logoutUser()}>
          <div>
            <Avatar sx={{ width: '25px', height: '25px' }} />
          </div>
          <p>{dummyData.first_name}</p>
        </div>
      </DashboardHeader>

      <DashboardBanner />

      <Courses classes={classes} />
    </DashboardContainer>
  );
}

export { Dashboard };
