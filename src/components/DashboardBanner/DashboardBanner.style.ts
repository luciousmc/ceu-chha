import styled from 'styled-components';

export const DashboardBannerContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    hsl(259 89% 39%),
    hsla(292 33% 50% / 0.86)
  );
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem 2.5rem;
  color: white;

  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    columns: 2;
    list-style: none;
    font-size: 0.8rem;
  }
`;

export const ImgPlaceholder = styled.div`
  width: 125px;
  height: 125px;
  border: 2px solid white;
  background-color: #777;
`;
