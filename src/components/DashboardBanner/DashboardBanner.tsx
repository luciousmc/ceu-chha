import {
  DashboardBannerContainer,
  ImgPlaceholder,
} from './DashboardBanner.style';

function DashboardBanner() {
  return (
    <DashboardBannerContainer>
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
      <div></div>
      <div></div>
    </DashboardBannerContainer>
  );
}

export { DashboardBanner };
