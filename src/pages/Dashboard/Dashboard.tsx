// Styled Components
import { Avatar } from '@mui/material';
import DashboardBanner from '../../components/DashboardBanner';
import Courses from '../../components/Courses';
import { logoutUser } from '../../services/firebase';
import { DashboardContainer, DashboardHeader } from './Dashboard.style';

function Dashboard() {
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

      <Courses />
    </DashboardContainer>
  );
}

export { Dashboard };
