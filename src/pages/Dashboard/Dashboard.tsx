// Styled Components
import { Avatar } from '@mui/material';
import DashboardBanner from '../../components/DashboardBanner';
import { logoutUser } from '../../services/firebase';
import { DashboardContainer, DashboardHeader } from './Dashboard.style';

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <p>Help</p>
        <div style={{ cursor: 'pointer' }} onClick={() => logoutUser()}>
          <div>
            <Avatar />
          </div>
          <p>Marlon Clay</p>
        </div>
      </DashboardHeader>

      <DashboardBanner />
    </DashboardContainer>
  );
}

export { Dashboard };
