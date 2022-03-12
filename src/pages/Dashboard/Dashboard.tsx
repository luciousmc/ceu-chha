import { useState } from 'react';

// Styled Components
import { DashboardContainer, DashboardHeader } from './Dashboard.style';

// Components
import DashboardBanner from '../../components/DashboardBanner';
import Courses from '../../components/Courses';

// Service Functions
import { logoutUser } from '../../services/firebase';

// Data
import dummyData from './../../components/Courses/course_dummy_data.json';

// Material UI
import { Avatar } from '@mui/material';

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
