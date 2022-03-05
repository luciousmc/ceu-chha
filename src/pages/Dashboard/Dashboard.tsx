// Styled Components
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import DashboardBanner from '../../components/DashboardBanner';
import { auth } from '../../lib/firebase';
import { DashboardContainer, DashboardHeader } from './Dashboard.style';

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <p>Help</p>
        <div>
          <div>
            <Avatar />
          </div>
          <p>Marlon Clay</p>
        </div>
      </DashboardHeader>

      <DashboardBanner />

      <button onClick={() => signOut(auth)}>Logout</button>
    </DashboardContainer>
  );
}

export { Dashboard };
