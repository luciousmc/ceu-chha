import {
  ClassInfoContainer,
  DashboardBannerContainer,
  ImgPlaceholder,
  StudentInfo,
  Wrapper,
} from './DashboardBanner.style';

function DashboardBanner() {
  return (
    <DashboardBannerContainer>
      <Wrapper>
        <StudentInfo>
          <div>
            <ImgPlaceholder />
          </div>
          <div>
            <h2>Hello, Marlon Clay</h2>
            <ul>
              <li>CEU License: 5648542139</li>
              <li>CHHA License: 455645154</li>
              <li>&ensp;Expires: 12/22/2022</li>
              <li>&ensp;Expires: 12/22/2022</li>
            </ul>
          </div>
        </StudentInfo>
        <ClassInfoContainer>
          <div>
            <p>3</p>
            <span>Classes Registered</span>
          </div>
          <div>
            <p>23</p>
            <span>Classes Taken</span>
          </div>
        </ClassInfoContainer>
      </Wrapper>
    </DashboardBannerContainer>
  );
}

export { DashboardBanner };
