import { type StudentCourseInfo } from '../ClassTable/ClassTable.types';
import {
  ClassInfoContainer,
  DashboardBannerContainer,
  ImgPlaceholder,
  StudentInfo,
  Wrapper,
} from './DashboardBanner.style';

function DashboardBanner({ userInfo }: { userInfo: StudentCourseInfo }) {
  return (
    <DashboardBannerContainer>
      <Wrapper>
        <StudentInfo>
          <div>
            <ImgPlaceholder />
          </div>
          <div>
            <h2>
              Hello, {userInfo.first_name} {userInfo.last_name}
            </h2>
            <ul>
              <li>CEU License: {userInfo.ceu_license_num}</li>
              <li>CHHA License: {userInfo.chha_license_num}</li>
              <li>&ensp;Expires: {userInfo.ceu_exp_date}</li>
              <li>&ensp;Expires: {userInfo.chha_exp_date}</li>
            </ul>
          </div>
        </StudentInfo>
        <ClassInfoContainer>
          <div>
            <p>{userInfo.registered_classes}</p>
            <span>Classes Registered</span>
          </div>
          <div>
            <p>{userInfo.classes_total}</p>
            <span>Classes Taken</span>
          </div>
        </ClassInfoContainer>
      </Wrapper>
    </DashboardBannerContainer>
  );
}

export { DashboardBanner };
