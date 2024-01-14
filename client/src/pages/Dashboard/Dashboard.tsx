import { DashboardContainer, DashboardHeader } from './Dashboard.style';
import DashboardBanner from '../../components/DashboardBanner';
import { logoutUser } from '../../services/firebase';
import dummyData from '../../components/ClassTable/course_dummy_data.json';
import { Avatar } from '@mui/material';
import { type StudentCourseInfo } from '../../components/ClassTable/ClassTable.types';
import { ClassTable } from '../../components/ClassTable/ClassTable';

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
          <p>{data.first_name}</p>
        </div>
      </DashboardHeader>

      <DashboardBanner userInfo={data} />

      <ClassTable classes={classes} />
    </DashboardContainer>
  );
}

export { Dashboard };
