// Styled Components
import { Avatar } from '@mui/material';
import DashboardBanner from '../../components/DashboardBanner';
import Courses from '../../components/Courses';
import { logoutUser } from '../../services/firebase';
import { DashboardContainer, DashboardHeader } from './Dashboard.style';
import dummyData from './../../components/Courses/course_dummy_data.json';
import { useState } from 'react';

function Dashboard() {
  const [data] = useState(dummyData);

  return (
    <DashboardContainer>
      <DashboardHeader>
        <p>Help</p>
        <div style={{ cursor: 'pointer' }} onClick={() => logoutUser()}>
          <div>
            <Avatar sx={{ width: '25px', height: '25px' }} />
          </div>
          <p>Marlon Clay</p>
        </div>
      </DashboardHeader>

      <DashboardBanner />

      <Courses classes={data.classes} />
    </DashboardContainer>
  );
}

export { Dashboard };
