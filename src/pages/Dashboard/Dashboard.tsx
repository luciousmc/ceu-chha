// Styled Components
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { DashboardContainer } from './Dashboard.style';

function Dashboard() {
  return (
    <DashboardContainer>
      <h1>I am the Dashboard hahahahahahhahah</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </DashboardContainer>
  );
}

export { Dashboard };
